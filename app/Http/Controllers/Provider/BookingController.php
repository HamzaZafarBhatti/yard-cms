<?php

namespace App\Http\Controllers\Provider;

use App\Http\Controllers\Controller;
use App\Models\Booking;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BookingController extends Controller
{
    public function index(Request $request)
    {
        $provider = $request->user()->provider;
        
        $bookings = $provider->bookings()
            ->with(['user', 'service', 'timeSlot'])
            ->latest('booking_date')
            ->get();

        return Inertia::render('Provider/Bookings/Index', [
            'bookings' => $bookings
        ]);
    }

    public function show(Request $request, Booking $booking)
    {
        $provider = $request->user()->provider;

        if ($booking->provider_id !== $provider->id) {
            abort(403);
        }

        $booking->load(['user', 'service', 'timeSlot', 'review']);

        return Inertia::render('Provider/Bookings/Show', [
            'booking' => $booking
        ]);
    }

    public function updateStatus(Request $request, Booking $booking)
    {
        $provider = $request->user()->provider;

        if ($booking->provider_id !== $provider->id) {
            abort(403);
        }

        $validated = $request->validate([
            'status' => 'required|in:pending,confirmed,completed,cancelled',
            'cancellation_reason' => 'required_if:status,cancelled|nullable|string|max:255',
        ]);

        $updateData = ['status' => $validated['status']];

        if ($validated['status'] === 'cancelled' && empty($booking->cancelled_at)) {
            $updateData['cancelled_at'] = now();
            $updateData['cancellation_reason'] = $validated['cancellation_reason'] ?? 'Cancelled by provider';
        }

        if ($validated['status'] === 'completed' && empty($booking->completed_at)) {
            $updateData['completed_at'] = now();
        }

        $booking->update($updateData);

        return redirect()->back()->with('success', 'Booking status updated successfully.');
    }
}
