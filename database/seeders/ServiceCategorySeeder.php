<?php

namespace Database\Seeders;

use App\Models\ServiceCategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ServiceCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            [
                'name' => 'Housekeeping',
                'slug' => 'housekeeping',
                'description' => 'Professional domestic cleaning services for homes and apartments',
                'icon' => 'home',
                'is_active' => true,
                'sort_order' => 1,
            ],
            [
                'name' => 'Gardening & Landscaping',
                'slug' => 'gardening-landscaping',
                'description' => 'Garden maintenance, landscaping, and outdoor care services',
                'icon' => 'flower-2',
                'is_active' => true,
                'sort_order' => 2,
            ],
            [
                'name' => 'General Maintenance',
                'slug' => 'general-maintenance',
                'description' => 'Handyman services for general property repairs and upkeep',
                'icon' => 'wrench',
                'is_active' => true,
                'sort_order' => 3,
            ],
            [
                'name' => 'Plumbing',
                'slug' => 'plumbing',
                'description' => 'Professional plumbing installation, repair, and maintenance',
                'icon' => 'droplets',
                'is_active' => true,
                'sort_order' => 4,
            ],
            [
                'name' => 'Electrical',
                'slug' => 'electrical',
                'description' => 'Qualified electricians for installations, repairs, and inspections',
                'icon' => 'zap',
                'is_active' => true,
                'sort_order' => 5,
            ],
            [
                'name' => 'Painting & Decorating',
                'slug' => 'painting-decorating',
                'description' => 'Interior and exterior painting and decorating services',
                'icon' => 'paintbrush',
                'is_active' => true,
                'sort_order' => 6,
            ],
            [
                'name' => 'Pool Cleaning',
                'slug' => 'pool-cleaning',
                'description' => 'Swimming pool cleaning, maintenance, and water treatment',
                'icon' => 'waves',
                'is_active' => true,
                'sort_order' => 7,
            ],
            [
                'name' => 'Pet Care',
                'slug' => 'pet-care',
                'description' => 'Dog walking, pet sitting, and animal care services',
                'icon' => 'paw-print',
                'is_active' => true,
                'sort_order' => 8,
            ],
            [
                'name' => 'Removals & Moving',
                'slug' => 'removals-moving',
                'description' => 'House and office removals, packing, and relocation services',
                'icon' => 'truck',
                'is_active' => true,
                'sort_order' => 9,
            ],
            [
                'name' => 'End of Tenancy Cleaning',
                'slug' => 'end-of-tenancy-cleaning',
                'description' => 'Deep cleaning services for end-of-tenancy property handovers',
                'icon' => 'sparkles',
                'is_active' => true,
                'sort_order' => 10,
            ],
        ];

        foreach ($categories as $category) {
            ServiceCategory::updateOrCreate(
                ['slug' => $category['slug']],
                $category,
            );
        }
    }
}
