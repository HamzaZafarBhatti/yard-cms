<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Service extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'provider_id',
        'category_id',
        'name',
        'slug',
        'description',
        'short_description',
        'price',
        'price_type',
        'duration_minutes',
        'is_active',
        'featured_image',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'price' => 'decimal:2',
            'duration_minutes' => 'integer',
            'is_active' => 'boolean',
        ];
    }

    // ──────────────────────────────────────────────
    // Relationships
    // ──────────────────────────────────────────────

    public function provider(): BelongsTo
    {
        return $this->belongsTo(Provider::class);
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(ServiceCategory::class, 'category_id');
    }

    public function bookings(): HasMany
    {
        return $this->hasMany(Booking::class);
    }

    // ──────────────────────────────────────────────
    // Scopes
    // ──────────────────────────────────────────────

    /**
     * Scope a query to only include active services.
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    // ──────────────────────────────────────────────
    // Accessors
    // ──────────────────────────────────────────────

    /**
     * Get the formatted price (e.g. '£45.00').
     */
    public function getFormattedPriceAttribute(): string
    {
        return '£' . number_format((float) $this->price, 2);
    }

    /**
     * Get the formatted duration (e.g. '2h 30m').
     */
    public function getFormattedDurationAttribute(): string
    {
        $minutes = (int) $this->duration_minutes;
        $hours = intdiv($minutes, 60);
        $remaining = $minutes % 60;

        if ($hours > 0 && $remaining > 0) {
            return "{$hours}h {$remaining}m";
        }

        if ($hours > 0) {
            return "{$hours}h";
        }

        return "{$remaining}m";
    }
}
