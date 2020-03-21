<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use Stripe\Error\Api;
use Stripe\Plan;
use Stripe\Product;
use Stripe\Stripe;
use Stripe\Subscription;

class StripeReset extends Seeder {
  public function run() {
    try {
      if (!config('services.stripe.reset_on_seed')) {
        return;
      }
      if (!Str::contains(Stripe::$apiKey, '_test_')) {
        throw new Exception(
          'Attempting to reset non-test Stripe data.  Aborting.'
        );
      }
      $plans = Plan::all(['limit' => 100]);
      foreach ($plans->autoPagingIterator() as $plan) {
        Plan::retrieve($plan->id)->delete();
      }

      $products = Product::all(['limit' => 100, 'type' => 'service']);
      foreach ($products->autoPagingIterator() as $product) {
        Product::retrieve($product->id)->delete();
      }

      $subs = Subscription::all(['limit' => 100]);
      foreach ($subs->autoPagingIterator() as $sub) {
        Subscription::retrieve($sub->id)->delete();
      }
    } catch (Api $e) {
      dump($e);
    }
  }
}
