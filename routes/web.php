<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    $categories = \App\Models\ServiceCategory::active()->orderBy('sort_order')->take(8)->get();
    $featuredServices = \App\Models\Service::with('provider')->active()->inRandomOrder()->take(6)->get();

    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'categories' => $categories,
        'featuredServices' => $featuredServices,
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

Route::prefix('provider')->group(function () {
    Route::middleware('guest')->group(function () {
        Route::get('/register', [\App\Http\Controllers\Provider\ProviderRegistrationController::class, 'create'])->name('provider.register');
        Route::post('/register', [\App\Http\Controllers\Provider\ProviderRegistrationController::class, 'store']);
    });

    Route::middleware(['auth', 'provider'])->group(function () {
        Route::get('/dashboard', [\App\Http\Controllers\Provider\ProviderDashboardController::class, 'index'])->name('provider.dashboard');
        
        Route::get('/pending', [\App\Http\Controllers\Provider\PendingApprovalController::class, 'index'])->name('provider.pending');

        Route::middleware(['provider.approved'])->group(function () {
            // Services
            Route::resource('services', \App\Http\Controllers\Provider\ServiceController::class)->names('provider.services');
            
            // Availability
            Route::get('/availability', [\App\Http\Controllers\Provider\AvailabilityController::class, 'index'])->name('provider.availability.index');
            Route::put('/availability', [\App\Http\Controllers\Provider\AvailabilityController::class, 'update'])->name('provider.availability.update');
            
            // Bookings
            Route::get('/bookings', [\App\Http\Controllers\Provider\BookingController::class, 'index'])->name('provider.bookings.index');
            Route::get('/bookings/{booking}', [\App\Http\Controllers\Provider\BookingController::class, 'show'])->name('provider.bookings.show');
            Route::put('/bookings/{booking}/status', [\App\Http\Controllers\Provider\BookingController::class, 'updateStatus'])->name('provider.bookings.update-status');
        });
    });
});

// Phase 3: Customer Browsing & Booking

// Public routes for browsing
Route::get('/services', [\App\Http\Controllers\Customer\ServiceBrowseController::class, 'index'])->name('services.index');
Route::get('/services/{slug}', [\App\Http\Controllers\Customer\ServiceBrowseController::class, 'show'])->name('services.show');

// Authenticated routes for customer booking/dashboard
Route::middleware('auth')->prefix('customer')->name('customer.')->group(function () {
    Route::post('/book', [\App\Http\Controllers\Customer\CustomerBookingController::class, 'store'])->name('book');
    Route::get('/dashboard', [\App\Http\Controllers\Customer\CustomerBookingController::class, 'index'])->name('dashboard');
    Route::put('/bookings/{booking}/cancel', [\App\Http\Controllers\Customer\CustomerBookingController::class, 'cancel'])->name('bookings.cancel');
    Route::post('/bookings/{booking}/review', [\App\Http\Controllers\Customer\ReviewController::class, 'store'])->name('bookings.review');
    Route::get('/bookings/{booking}/stripe/success', [\App\Http\Controllers\Customer\CustomerBookingController::class, 'stripe_success'])->name('bookings.stripe_success');
    Route::get('/bookings/{booking}/stripe/cancel', [\App\Http\Controllers\Customer\CustomerBookingController::class, 'stripe_cancel'])->name('bookings.stripe_cancel');
});

