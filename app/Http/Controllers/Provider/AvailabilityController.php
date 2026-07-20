<?php

namespace App\Http\Controllers\Provider;

use App\Http\Controllers\Controller;
use App\Models\TimeSlot;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AvailabilityController extends Controller
{
    public function index(Request $request)
    {
        $provider = $request->user()->provider;
        $timeSlots = $provider->timeSlots()->orderBy('day_of_week')->orderBy('start_time')->get();

        // Group by day of week for the frontend
        $groupedSlots = [];
        for ($i = 0; $i <= 6; $i++) {
            $groupedSlots[$i] = [];
        }

        foreach ($timeSlots as $slot) {
            $groupedSlots[$slot->day_of_week][] = [
                'id' => $slot->id,
                'start_time' => substr($slot->start_time, 0, 5), // H:i format
                'end_time' => substr($slot->end_time, 0, 5),
                'is_available' => $slot->is_available
            ];
        }

        return Inertia::render('Provider/Availability/Index', [
            'timeSlots' => $groupedSlots
        ]);
    }

    public function update(Request $request)
    {
        $provider = $request->user()->provider;

        $validated = $request->validate([
            'slots' => 'required|array',
            'slots.*' => 'array',
            'slots.*.*.start_time' => 'required|date_format:H:i',
            'slots.*.*.end_time' => 'required|date_format:H:i|after:slots.*.*.start_time',
            'slots.*.*.is_available' => 'boolean',
        ]);

        // Replace all slots
        // We delete all existing slots and recreate them. 
        // Note: in a real production system, you might want to soft-delete or update to not break existing bookings linked to specific time slots.
        // But typical Availability management overwrites the default weekly schedule.
        // For this phase, replacing is fine.

        $provider->timeSlots()->delete();

        $newSlots = [];
        foreach ($validated['slots'] as $dayOfWeek => $daySlots) {
            foreach ($daySlots as $slot) {
                $newSlots[] = [
                    'provider_id' => $provider->id,
                    'day_of_week' => $dayOfWeek,
                    'start_time' => $slot['start_time'],
                    'end_time' => $slot['end_time'],
                    'is_available' => $slot['is_available'] ?? true,
                    'created_at' => now(),
                    'updated_at' => now(),
                ];
            }
        }

        if (!empty($newSlots)) {
            TimeSlot::insert($newSlots);
        }

        return redirect()->route('provider.availability.index')->with('success', 'Availability updated successfully.');
    }
}
