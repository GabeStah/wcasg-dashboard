<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder {
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run() {
    $this->call(PlanTableSeeder::class);
    $this->call(RoleTableSeeder::class);
    $this->call(CategoryTableSeeder::class);
    $this->call(UserTableSeeder::class);
    $this->call(SubscriptionTableSeeder::class);
    $this->call(StatementSeeder::class);
  }
}
