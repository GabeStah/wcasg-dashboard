<?php

/** @var Factory $factory */

use CreatyDev\Domain\Subscriptions\Models\Plan;
use CreatyDev\Domain\Users\Models\User;
use CreatyDev\Solarix\Cashier\Subscription;
use Faker\Generator as Faker;
use Illuminate\Database\Eloquent\Factory;
use Illuminate\Support\Str;
use Stripe\PaymentMethod;
use Stripe\Stripe;

$factory->defineAs(Subscription::class, 'complete', function (Faker $faker) {
  if (!Str::contains(Stripe::$apiKey, '_test_')) {
    throw new Exception(
      'Cannot run subscription factory for non-test Stripe environment.  Aborting.'
    );
  }

  // User
  $user = factory(User::class)->create();

  // Plan
  $plan = factory(Plan::class)->create();

  // PaymentMethod
  $paymentMethod = PaymentMethod::create(factory(PaymentMethod::class)->raw());

  // create Sub
  $sub = $user
    ->newSubscription($plan->gateway_id, $plan->gateway_id)
    ->create($paymentMethod);

  // Return attributes to use in-memory ->make()
  return $sub->getAttributes();
});
