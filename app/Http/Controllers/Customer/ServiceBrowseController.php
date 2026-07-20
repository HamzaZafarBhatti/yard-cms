<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;
use App\Models\Service;
use App\Models\ServiceCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ServiceBrowseController extends Controller
{
    public function index(Request $request)
    {
        $categories = ServiceCategory::orderBy('name')->get();

        $services = Service::query()
            ->active()
            ->with(['category', 'provider.user'])
            ->when($request->search, function ($query, $search) {
                $query->where(function ($q) use ($search) {
                    $q->where('name', 'like', "%{$search}%")
                      ->orWhere('short_description', 'like', "%{$search}%");
                });
            })
            ->when($request->category, function ($query, $category) {
                $query->where('category_id', $category);
            })
            ->latest()
            ->paginate(12)
            ->withQueryString();

        return Inertia::render('Customer/Browse/Index', [
            'services' => $services,
            'categories' => $categories,
            'filters' => $request->only(['search', 'category']),
        ]);
    }

    public function show($slug)
    {
        $service = Service::query()
            ->active()
            ->with([
                'category',
                'provider.user',
                'provider.reviews' => function ($query) {
                    $query->published()->with('user')->latest()->take(5);
                },
                'provider.timeSlots' => function ($query) {
                    $query->where('is_available', true)->orderBy('day_of_week')->orderBy('start_time');
                }
            ])
            ->where('slug', $slug)
            ->firstOrFail();

        return Inertia::render('Customer/Browse/Show', [
            'service' => $service,
        ]);
    }
}
