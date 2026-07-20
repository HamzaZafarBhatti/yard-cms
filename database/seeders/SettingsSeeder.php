<?php

namespace Database\Seeders;

use App\Models\Setting;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SettingsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $settings = [
            [
                'key' => 'stripe_enabled',
                'value' => '0',
                'group' => 'payment',
                'type' => 'boolean',
                'description' => 'Enable Stripe payment processing for bookings',
            ],
            [
                'key' => 'stripe_public_key',
                'value' => '',
                'group' => 'payment',
                'type' => 'string',
                'description' => 'Stripe publishable API key',
            ],
            [
                'key' => 'stripe_secret_key',
                'value' => '',
                'group' => 'payment',
                'type' => 'string',
                'description' => 'Stripe secret API key',
            ],
            [
                'key' => 'platform_commission',
                'value' => '10',
                'group' => 'payment',
                'type' => 'number',
                'description' => 'Platform commission percentage on bookings',
            ],
            [
                'key' => 'provider_auto_approve',
                'value' => '0',
                'group' => 'providers',
                'type' => 'boolean',
                'description' => 'Auto-approve new provider registrations',
            ],
            [
                'key' => 'max_booking_days_ahead',
                'value' => '30',
                'group' => 'bookings',
                'type' => 'number',
                'description' => 'Maximum days in advance a booking can be made',
            ],
            [
                'key' => 'site_name',
                'value' => 'WorkYarder UK',
                'group' => 'general',
                'type' => 'string',
                'description' => 'The site display name',
            ],
            [
                'key' => 'support_email',
                'value' => 'support@workyarder.co.uk',
                'group' => 'general',
                'type' => 'string',
                'description' => 'Support email address',
            ],
        ];

        foreach ($settings as $setting) {
            Setting::updateOrCreate(
                ['key' => $setting['key']],
                $setting,
            );
        }
    }
}
