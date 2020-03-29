<?php

use CreatyDev\Domain\Setting;
use CreatyDev\Domain\Statements\Models\StatementTemplate;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder {
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run() {
    $this->call(StripeReset::class);
    $this->call(ExtensionSeeder::class);
    $this->call(PlanTableSeeder::class);
    $this->call(RoleTableSeeder::class);
    $this->call(CategoryTableSeeder::class);
    $this->call(UserTableSeeder::class);
    $this->call(SubscriptionTableSeeder::class);
    $this->call(StatementSeeder::class);

    // Finalize
    Setting::create([
      'default_statement_template' => StatementTemplate::first()->id
    ]);
  }
}
