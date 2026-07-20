<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;
use App\Models\Booking;
use App\Models\Service;
use App\Models\Setting;
use App\Models\TimeSlot;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Carbon\Carbon;

class CustomerBookingController extends Controller
{
    public function index()
    {
        $bookings = Booking::query()
            ->where('user_id', auth()->id())
            ->with(['service', 'provider.user', 'timeSlot', 'review'])
            ->latest()
            ->paginate(10);

        return Inertia::render('Customer/Dashboard', [
            'bookings' => $bookings,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'service_id' => ['required', 'exists:services,id'],
            'time_slot_id' => ['required', 'exists:time_slots,id'],
            'booking_date' => ['required', 'date', 'after_or_equal:today'],
            'notes' => ['nullable', 'string', 'max:1000'],
        ]);

        $service = Service::active()->findOrFail($validated['service_id']);
        $timeSlot = TimeSlot::where('is_available', true)
            ->where('provider_id', $service->provider_id)
            ->findOrFail($validated['time_slot_id']);

        // Check if the booking date matches the day of week of the time slot
        $bookingDate = Carbon::parse($validated['booking_date']);
        if ($bookingDate->dayOfWeek !== (int) $timeSlot->day_of_week) {
            return back()->withErrors(['booking_date' => 'The selected date does not match the time slot day.']);
        }

        $booking = Booking::create([
            'user_id' => auth()->id(),
            'service_id' => $service->id,
            'provider_id' => $service->provider_id,
            'time_slot_id' => $timeSlot->id,
            'booking_date' => $validated['booking_date'],
            'start_time' => $timeSlot->start_time,
            'end_time' => $timeSlot->end_time,
            'status' => 'pending',
            'total_price' => $service->price,
            'notes' => $validated['notes'],
        ]);

        if (Setting::isEnabled('stripe_enabled') && Setting::get('stripe_secret_key')) {
            try {
                \Stripe\Stripe::setApiKey(Setting::get('stripe_secret_key'));
                
                $checkout_session = \Stripe\Checkout\Session::create([
                    'line_items' => [[
                        'price_data' => [
                            'currency' => 'gbp',
                            'product_data' => [
                                'name' => $service->name,
                            ],
                            'unit_amount' => (int) ($service->price * 100),
                        ],
                        'quantity' => 1,
                    ]],
                    'mode' => 'payment',
                    'success_url' => route('customer.bookings.stripe_success', ['booking' => $booking->id]),
                    'cancel_url' => route('customer.bookings.stripe_cancel', ['booking' => $booking->id]),
                ]);

                return Inertia::location($checkout_session->url);
            } catch (\Exception $e) {
                \Illuminate\Support\Facades\Log::error('Stripe error: ' . $e->getMessage());
                // Fall back to regular behavior but show a warning if payment failed to init
                return redirect()->route('customer.dashboard')->with('error', 'Stripe payment initialization failed. Your booking is pending.');
            }
        }

        return redirect()->route('customer.dashboard')->with('success', 'Booking requested successfully.');
    }

    public function stripe_success(Request $request, Booking $booking)
    {
        if ($booking->user_id !== auth()->id()) {
            abort(403);
        }

        $booking->update(['status' => 'confirmed']);

        return redirect()->route('customer.dashboard')->with('success', 'Payment successful! Your booking is confirmed.');
    }

    public function stripe_cancel(Request $request, Booking $booking)
    {
        if ($booking->user_id !== auth()->id()) {
            abort(403);
        }

        $booking->update([
            'status' => 'cancelled',
            'cancelled_at' => now(),
            'cancellation_reason' => 'Payment cancelled by customer',
        ]);

        return redirect()->route('customer.dashboard')->with('error', 'Payment was cancelled. Your booking has been cancelled.');
    }

    public function cancel(Booking $booking)
    {
        if ($booking->user_id !== auth()->id()) {
            abort(403);
        }

        if (! $booking->canBeCancelled()) {
            return back()->with('error', 'This booking cannot be cancelled.');
        }

        $booking->update([
            'status' => 'cancelled',
            'cancelled_at' => now(),
            'cancellation_reason' => 'Cancelled by customer',
        ]);

        return back()->with('success', 'Booking has been cancelled.');
    }
}
