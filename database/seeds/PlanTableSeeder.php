<?php

use CreatyDev\Domain\Subscriptions\Models\Plan;
use Illuminate\Database\Seeder;
use Stripe\Product as StripeProduct;

class PlanTableSeeder extends Seeder {
  public function run() {
    // Create Product
    $stripeProduct = StripeProduct::create(
      factory(StripeProduct::class)->raw()
    );

    for ($i = 0; $i <= 3; $i++) {
      // Plan
      $plan = factory(Plan::class)->create([
        'product_id' => $stripeProduct->id
      ]);
    }
  }
}
