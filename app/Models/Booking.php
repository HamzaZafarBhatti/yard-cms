<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;

class Booking extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'reference',
        'user_id',
        'service_id',
        'provider_id',
        'time_slot_id',
        'booking_date',
        'start_time',
        'end_time',
        'status',
        'total_price',
        'notes',
        'cancellation_reason',
        'cancelled_at',
        'completed_at',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'booking_date' => 'date',
            'total_price' => 'decimal:2',
            'cancelled_at' => 'datetime',
            'completed_at' => 'datetime',
            'start_time' => 'datetime:H:i',
            'end_time' => 'datetime:H:i',
        ];
    }

    /**
     * The "booted" method of the model.
     */
    protected static function booted(): void
    {
        static::creating(function (Booking $booking) {
            if (empty($booking->reference)) {
                $booking->reference = static::generateReference();
            }
        });
    }

    /**
     * Generate a unique booking reference (e.g. WY-20260719-A3X9K).
     */
    protected static function generateReference(): string
    {
        do {
            $reference = 'WY-' . now()->format('Ymd') . '-' . strtoupper(Str::random(5));
        } while (static::where('reference', $reference)->exists());

        return $reference;
    }

    // ──────────────────────────────────────────────
    // Relationships
    // ──────────────────────────────────────────────

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function service(): BelongsTo
    {
        return $this->belongsTo(Service::class);
    }

    public function provider(): BelongsTo
    {
        return $this->belongsTo(Provider::class);
    }

    public function timeSlot(): BelongsTo
    {
        return $this->belongsTo(TimeSlot::class);
    }

    public function review(): HasOne
    {
        return $this->hasOne(Review::class);
    }

    // ──────────────────────────────────────────────
    // Scopes
    // ──────────────────────────────────────────────

    public function scopePending($query)
    {
        return $query->where('status', 'pending');
    }

    public function scopeConfirmed($query)
    {
        return $query->where('status', 'confirmed');
    }

    public function scopeCompleted($query)
    {
        return $query->where('status', 'completed');
    }

    public function scopeCancelled($query)
    {
        return $query->where('status', 'cancelled');
    }

    // ──────────────────────────────────────────────
    // Helper Methods
    // ──────────────────────────────────────────────

    public function isPending(): bool
    {
        return $this->status === 'pending';
    }

    public function isConfirmed(): bool
    {
        return $this->status === 'confirmed';
    }

    public function isCompleted(): bool
    {
        return $this->status === 'completed';
    }

    public function isCancelled(): bool
    {
        return $this->status === 'cancelled';
    }

    /**
     * Determine if the booking can be cancelled (pending or confirmed).
     */
    public function canBeCancelled(): bool
    {
        return $this->isPending() || $this->isConfirmed();
    }

    /**
     * Determine if the booking can be reviewed (completed and no review exists).
     */
    public function canBeReviewed(): bool
    {
        return $this->isCompleted() && ! $this->review()->exists();
    }
}
