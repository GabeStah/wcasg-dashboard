<?php

namespace database\factories\StripePlanFactory;

/** @var Factory $factory */

use Stripe\Plan as StripePlan;
use Faker\Generator as Faker;
use Illuminate\Database\Eloquent\Factory;

$factory->define(StripePlan::class, function (Faker $faker) {
  $planName = $faker->words(3, true);
  $gateway_id = str_replace(' ', '_', $planName);
  $price = $faker->numberBetween(0, 500);
  $trialPeriod = $faker->numberBetween(0, 28);

  return [
    'amount' => $price,
    'interval' => $faker->randomElement(['day', 'week', 'month', 'year']),
    'product' => [
      'name' => $planName
    ],
    'currency' => 'usd',
    'id' => $gateway_id,
    'trial_period_days' => $trialPeriod
  ];
});
