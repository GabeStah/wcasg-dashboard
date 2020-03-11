<?php

use CreatyDev\Domain\Subscriptions\Models\Plan;
use Illuminate\Database\Seeder;
use Stripe\Plan as StripePlan;

class PlanTableSeeder extends Seeder {
  public function run() {
    for ($i = 0; $i <= 3; $i++) {
      // Stripe plan
      $stripePlan = StripePlan::create(factory(StripePlan::class)->make());

      // Plan
      $plan = factory(Plan::class)->create([
        'name' => $stripePlan->id,
        'gateway_id' => $stripePlan->id,
        'price' => $stripePlan->amount,
        'interval' => $stripePlan->interval,
        'active' => $stripePlan->active,
        'trial_period_days' => $stripePlan->trial_period_days
      ]);
    }
  }
}
