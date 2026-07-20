<?php

namespace App\Http\Controllers\Provider;

use App\Http\Controllers\Controller;
use App\Models\Provider;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Illuminate\Validation\Rules;

class ProviderRegistrationController extends Controller
{
    public function create()
    {
        return Inertia::render('Provider/Register');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', 'unique:'.User::class],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'phone' => ['required', 'string', 'max:20'],
            'business_name' => ['required', 'string', 'max:255'],
            'description' => ['required', 'string'],
            'city' => ['required', 'string', 'max:100'],
            'postcode' => ['required', 'string', 'max:20'],
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role' => 'provider',
            'phone' => $request->phone,
        ]);

        Provider::create([
            'user_id' => $user->id,
            'business_name' => $request->business_name,
            'slug' => Str::slug($request->business_name) . '-' . uniqid(),
            'description' => $request->description,
            'phone' => $request->phone,
            'email' => $request->email,
            'city' => $request->city,
            'postcode' => $request->postcode,
            'status' => 'pending',
        ]);

        Auth::login($user);

        return redirect()->route('provider.dashboard');
    }
}
