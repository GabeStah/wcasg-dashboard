<?php

namespace database\factories\StripePlanFactory;

/** @var Factory $factory */

use Stripe\Plan as StripePlan;
use Faker\Generator as Faker;
use Illuminate\Database\Eloquent\Factory;

$factory->define(StripePlan::class, function (Faker $faker) {
  $nickname = $faker->words(3, true);
  //  $stripe_plan_id = str_replace(' ', '_', $planName);
  $amount = $faker->numberBetween(0, 2500);
  $trialPeriod = $faker->numberBetween(0, 28);

  return [
    'amount' => $amount,
    'interval' => $faker->randomElement(['day', 'week', 'month', 'year']),
    'currency' => 'usd',
    'trial_period_days' => $trialPeriod,
    'nickname' => $nickname
  ];
});
