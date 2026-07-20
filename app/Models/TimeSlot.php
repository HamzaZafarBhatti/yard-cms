<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class TimeSlot extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'provider_id',
        'day_of_week',
        'start_time',
        'end_time',
        'is_available',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'day_of_week' => 'integer',
            'is_available' => 'boolean',
            'start_time' => 'datetime:H:i',
            'end_time' => 'datetime:H:i',
        ];
    }

    // ──────────────────────────────────────────────
    // Relationships
    // ──────────────────────────────────────────────

    public function provider(): BelongsTo
    {
        return $this->belongsTo(Provider::class);
    }

    public function bookings(): HasMany
    {
        return $this->hasMany(Booking::class);
    }

    // ──────────────────────────────────────────────
    // Accessors
    // ──────────────────────────────────────────────

    /**
     * Get the human-readable day name (e.g. 'Monday').
     */
    public function getDayNameAttribute(): string
    {
        $days = [
            0 => 'Sunday',
            1 => 'Monday',
            2 => 'Tuesday',
            3 => 'Wednesday',
            4 => 'Thursday',
            5 => 'Friday',
            6 => 'Saturday',
        ];

        return $days[$this->day_of_week] ?? 'Unknown';
    }
}
