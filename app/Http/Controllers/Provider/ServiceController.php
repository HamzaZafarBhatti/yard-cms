<?php

namespace App\Http\Controllers\Provider;

use App\Http\Controllers\Controller;
use App\Models\Service;
use App\Models\ServiceCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;

class ServiceController extends Controller
{
    public function index(Request $request)
    {
        $provider = $request->user()->provider;
        $services = $provider->services()->with('category')->latest()->get();

        return Inertia::render('Provider/Services/Index', [
            'services' => $services
        ]);
    }

    public function create()
    {
        $categories = ServiceCategory::where('is_active', true)->orderBy('name')->get();

        return Inertia::render('Provider/Services/Create', [
            'categories' => $categories
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'category_id' => 'required|exists:service_categories,id',
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'short_description' => 'nullable|string|max:255',
            'price' => 'required|numeric|min:0',
            'price_type' => 'required|in:fixed,hourly,starting_at',
            'duration_minutes' => 'required|integer|min:15',
            'is_active' => 'boolean',
        ]);

        $validated['slug'] = Str::slug($validated['name']);
        
        // Ensure slug is unique for this provider (simple approach)
        $count = Service::where('slug', $validated['slug'])->count();
        if ($count > 0) {
            $validated['slug'] .= '-' . time();
        }

        $request->user()->provider->services()->create($validated);

        return redirect()->route('provider.services.index')->with('success', 'Service created successfully.');
    }

    public function edit(Service $service)
    {
        // Ensure the service belongs to the provider
        if ($service->provider_id !== auth()->user()->provider->id) {
            abort(403);
        }

        $categories = ServiceCategory::where('is_active', true)->orderBy('name')->get();

        return Inertia::render('Provider/Services/Edit', [
            'service' => $service,
            'categories' => $categories
        ]);
    }

    public function update(Request $request, Service $service)
    {
        if ($service->provider_id !== $request->user()->provider->id) {
            abort(403);
        }

        $validated = $request->validate([
            'category_id' => 'required|exists:service_categories,id',
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'short_description' => 'nullable|string|max:255',
            'price' => 'required|numeric|min:0',
            'price_type' => 'required|in:fixed,hourly,starting_at',
            'duration_minutes' => 'required|integer|min:15',
            'is_active' => 'boolean',
        ]);

        // Only update slug if name changed
        if ($service->name !== $validated['name']) {
            $validated['slug'] = Str::slug($validated['name']);
            $count = Service::where('slug', $validated['slug'])->where('id', '!=', $service->id)->count();
            if ($count > 0) {
                $validated['slug'] .= '-' . time();
            }
        }

        $service->update($validated);

        return redirect()->route('provider.services.index')->with('success', 'Service updated successfully.');
    }

    public function destroy(Service $service)
    {
        if ($service->provider_id !== auth()->user()->provider->id) {
            abort(403);
        }

        $service->delete();

        return redirect()->route('provider.services.index')->with('success', 'Service deleted successfully.');
    }
}
