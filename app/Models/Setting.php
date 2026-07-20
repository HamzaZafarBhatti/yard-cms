<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'key',
        'value',
        'group',
        'type',
        'description',
    ];

    // ──────────────────────────────────────────────
    // Static Helpers
    // ──────────────────────────────────────────────

    /**
     * Get a setting value by key, or return the default.
     */
    public static function get(string $key, mixed $default = null): mixed
    {
        $setting = static::where('key', $key)->first();

        return $setting ? $setting->value : $default;
    }

    /**
     * Create or update a setting by key.
     */
    public static function set(string $key, mixed $value): void
    {
        static::updateOrCreate(
            ['key' => $key],
            ['value' => $value],
        );
    }

    /**
     * Check if a setting is enabled (value is '1', 'true', or 'yes').
     */
    public static function isEnabled(string $key): bool
    {
        $value = static::get($key);

        return in_array(strtolower((string) $value), ['1', 'true', 'yes'], true);
    }
}
