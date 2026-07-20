<?php

namespace App\Http\Controllers\Provider;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProviderDashboardController extends Controller
{
    public function index(Request $request)
    {
        $provider = $request->user()->provider;

        $stats = [
            'services_count' => $provider ? $provider->services()->count() : 0,
            'bookings_count' => $provider ? $provider->bookings()->count() : 0,
            'reviews_count' => $provider ? $provider->reviews()->count() : 0,
            'average_rating' => $provider ? $provider->average_rating : 0,
            'status' => $provider ? $provider->status : 'pending',
        ];

        return Inertia::render('Provider/Dashboard', [
            'stats' => $stats,
        ]);
    }
}
