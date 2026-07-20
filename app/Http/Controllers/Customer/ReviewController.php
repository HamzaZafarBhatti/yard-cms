<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;
use App\Models\Booking;
use App\Models\Review;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    public function store(Request $request, Booking $booking)
    {
        if ($booking->user_id !== auth()->id()) {
            abort(403);
        }

        if (! $booking->canBeReviewed()) {
            return back()->with('error', 'This booking is not eligible for review.');
        }

        $validated = $request->validate([
            'rating' => ['required', 'integer', 'min:1', 'max:5'],
            'title' => ['required', 'string', 'max:255'],
            'comment' => ['required', 'string', 'max:1000'],
        ]);

        Review::create([
            'user_id' => auth()->id(),
            'provider_id' => $booking->provider_id,
            'booking_id' => $booking->id,
            'rating' => $validated['rating'],
            'title' => $validated['title'],
            'comment' => $validated['comment'],
            'is_published' => true,
        ]);

        return back()->with('success', 'Review submitted successfully.');
    }
}
