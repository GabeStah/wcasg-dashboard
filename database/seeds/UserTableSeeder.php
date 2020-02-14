<?php

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use CreatyDev\Domain\Users\Models\User;
use CreatyDev\Domain\Users\Models\Role;

class UserTableSeeder extends Seeder {
  public function run() {
    $admin = Role::where('slug', 'admin-root')->first();

    factory(User::class)->create([
      'first_name' => 'Gabe',
      'last_name' => 'Wyatt',
      'username' => 'gabestah',
      'email' => 'gabe@solarixdigital.com',
      'password' =>
        '$2y$10$uaVWUaJL27UHi//C0wE3/OOEinMp7qZ04HwQzjII73ML5dELZ.sOG',
      'activated' => true
    ]);

    $user = User::where('email', 'gabe@solarixdigital.com')->first();

    $expires_at = Carbon::now()->addDays(28);
    $user->assignRole($admin, $expires_at);

    factory(User::class)->create([
      'first_name' => 'Kyle',
      'last_name' => 'Somerville',
      'username' => 'kyle',
      'email' => 'kyle@solarixdigital.com',
      'password' =>
        '$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm',
      'activated' => true
    ]);

    $expires_at = Carbon::now()->addDays(28);

    $user = User::where('email', 'gabe@solarixdigital.com')->first();
    $user->assignRole($admin, $expires_at);
    $user = User::where('email', 'kyle@solarixdigital.com')->first();
    $user->assignRole($admin, $expires_at);

    // Create 10 random users
    factory(User::class, 10)->create();
  }
}
