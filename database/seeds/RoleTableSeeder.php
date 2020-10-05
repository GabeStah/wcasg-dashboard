<?php

use CreatyDev\Domain\Users\Models\Permission;
use CreatyDev\Domain\Users\Models\Role;
use Illuminate\Database\Seeder;

class RoleTableSeeder extends Seeder {
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run() {
    $roles = [
      [
        'name' => 'Admin',
        'children' => [
          [
            'name' => 'Root'
          ]
        ]
      ]
    ];

    foreach ($roles as $role) {
      Role::create($role);
    }

    $permissions = [
      [
        'name' => 'manage users'
      ],
      [
        'name' => 'manage roles'
      ],
      [
        'name' => 'assign roles'
      ],
      [
        'name' => 'create users'
      ],
      [
        'name' => 'update users'
      ],
      [
        'name' => 'delete users'
      ],
      [
        'name' => 'browse admin'
      ],
      [
        'name' => 'manage roles'
      ],
      [
        'name' => 'manage plans'
      ],
      [
        'name' => 'manage products'
      ],
      [
        'name' => 'manage users'
      ],
      [
        'name' => 'assign roles'
      ],
      [
        'name' => 'create users'
      ],
      [
        'name' => 'update users'
      ],
      [
        'name' => 'ignore-site-limit'
      ]
    ];

    foreach ($permissions as $permission) {
      Permission::create($permission);
    }

    // Add ignore-site-limit permission to admin-root role
    $ignoreSiteLimitPermission = Permission::whereName(
      'ignore-site-limit'
    )->first();
    $rootRole = Role::whereSlug('admin-root')->first();
    $rootRole->permissions()->attach($ignoreSiteLimitPermission);
  }
}
