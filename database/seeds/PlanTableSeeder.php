<?php

use CreatyDev\Domain\Subscriptions\Models\Plan;
use Illuminate\Database\Seeder;

class PlanTableSeeder extends Seeder {
  public function run() {
    factory(Plan::class, 3)->create();
  }
}
