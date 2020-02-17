<?php

use CreatyDev\Domain\Sites\Models\Site;
use CreatyDev\Domain\Subscriptions\Models\Plan;
use CreatyDev\Domain\Users\Models\User;
use CreatyDev\Solarix\Cashier\Subscription;
use Illuminate\Database\Seeder;
use Faker\Generator;
use CreatyDev\Solarix\Cashier\SubscriptionBuilder;
use Stripe\Token;

class SubscriptionTableSeeder extends Seeder {
  public function run() {
    // Create subs for first 2 Users.
    $userA = User::first();
    $userB = User::all()->get(1);
    $planA = Plan::all()->get(0);
    $planB = Plan::all()->get(1);

    $tokenA = Token::create(factory(Token::class)->raw());
    $tokenB = Token::create(factory(Token::class)->raw());

    $subscriptionA = $userA
      ->newSubscription($planA->gateway_id, $planA->gateway_id)
      ->create($tokenA->id, [], $planA->id);
    $subscriptionB = $userB
      ->newSubscription($planB->gateway_id, $planB->gateway_id)
      ->create($tokenB->id, [], $planB->id);

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

    factory(Site::class, 3)->create(['subscription_id' => $subscriptionA]);
    factory(Site::class, 3)->create(['subscription_id' => $subscriptionB]);

    // Create 3 extras Subs with new users, plans, tokens
    factory(Subscription::class, 'complete', 3)->make();
  }
}
