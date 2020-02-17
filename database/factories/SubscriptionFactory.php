<?php

/** @var Factory $factory */

use CreatyDev\Domain;
use CreatyDev\Domain\Subscriptions\Models\Plan;
use CreatyDev\Domain\Users\Models\User;
use CreatyDev\Solarix\Cashier\Subscription;
use Faker\Generator as Faker;
use Illuminate\Database\Eloquent\Factory;
use Stripe\Token;

$factory->defineAs(Subscription::class, 'complete', function (Faker $faker) {
  // User
  $user = factory(User::class)->create();

  // Plan
  $plan = factory(Plan::class)->create();

  // Token
  $token = Token::create(factory(Token::class)->raw());

  // create Sub
  $sub = $user
    ->newSubscription($plan->gateway_id, $plan->gateway_id)
    ->create($token->id);

  // Return attributes to use in-memory ->make()
  return $sub->getAttributes();
});
