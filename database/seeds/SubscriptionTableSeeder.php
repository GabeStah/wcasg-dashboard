<?php

use CreatyDev\Domain\Sites\Models\Site;
use CreatyDev\Domain\Subscriptions\Models\Plan;
use CreatyDev\Domain\Users\Models\User;
use CreatyDev\Solarix\Cashier\Subscription;
use Illuminate\Database\Seeder;
use Stripe\PaymentMethod;

class SubscriptionTableSeeder extends Seeder {
  public function run() {
    // Create subs for first 2 Users.
    $userA = User::first();
    $userB = User::all()->get(1);
    $planA = Plan::all()->get(0);
    $planB = Plan::all()->get(1);

    $paymentMethodA = PaymentMethod::create(
      factory(PaymentMethod::class)->raw()
    );
    $paymentMethodB = PaymentMethod::create(
      factory(PaymentMethod::class)->raw()
    );

    $subscriptionA = $userA
      ->newSubscription($planA->gateway_id, $planA->gateway_id)
      ->create($paymentMethodA);
    $subscriptionB = $userB
      ->newSubscription($planB->gateway_id, $planB->gateway_id)
      ->create($paymentMethodB);

    // Create Sites
    factory(Site::class, 1)->create([
      'domain' => 'localhost:84',
      'active' => true,
      'subscription_id' => $subscriptionA
    ]);

    factory(Site::class, 1)->create([
      'domain' => '10.0.75.1:5000',
      'active' => true,
      'subscription_id' => $subscriptionB
    ]);

    factory(Site::class, 5)->create(['subscription_id' => $subscriptionA]);
    factory(Site::class, 5)->create(['subscription_id' => $subscriptionB]);

    // Create 5 extras Subs with new users, plans, tokens
    factory(Subscription::class, 'complete', 5)->make();
  }
}
