<?php

use CreatyDev\Domain\Subscriptions\Models\Plan;
use Illuminate\Database\Seeder;
use Stripe\Plan as StripePlan;
use Stripe\Product as StripeProduct;

class PlanTableSeeder extends Seeder {
  public function run() {
    // Create Product
    $stripeProduct = StripeProduct::create(
      factory(StripeProduct::class)->make()
    );

    for ($i = 0; $i <= 3; $i++) {
      //      // Stripe plan
      //      $stripePlan = StripePlan::create(
      //        factory(StripePlan::class)->make(['product' => $stripeProduct->id])
      //      );

      // Plan
      $plan = factory(Plan::class)->create([
        //        'nickname' => $stripePlan->nickname,
        //        'amount' => $stripePlan->amount,
        //        'currency' => $stripePlan->currency,
        'product_id' => $stripeProduct->id
        //        'interval' => $stripePlan->interval,
        //        'active' => $stripePlan->active,
        //        'trial_period_days' => $stripePlan->trial_period_days
      ]);
    }
  }
}
