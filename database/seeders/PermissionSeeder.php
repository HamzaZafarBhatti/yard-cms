<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $permissions = [
            'create role',
            'view role',
            'edit role',
            'delete role',
            'create permission',
            'view permission',
            'edit permission',
            'delete permission',
        ];

        foreach ($permissions as $permission) {
            \Spatie\Permission\Models\Permission::firstOrCreate(['name' => $permission]);
        }

        $role = \Spatie\Permission\Models\Role::firstOrCreate(['name' => 'Super admin']);
        $role->givePermissionTo($permissions);
    }
}
