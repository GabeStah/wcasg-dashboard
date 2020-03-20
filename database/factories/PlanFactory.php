<?php

namespace database\factories\PlanFactory;

/** @var Factory $factory */

use CreatyDev\Domain\Subscriptions\Models\Plan;
use Faker\Generator as Faker;
use Illuminate\Database\Eloquent\Factory;

$factory->define(Plan::class, function (Faker $faker) {
  $teamEnable = $faker->boolean;
  $teams_limit = $teamEnable ? $faker->numberBetween(0, 5) : 0;
  $amount = $faker->numberBetween(0, 2500);
  $trialPeriod = $faker->numberBetween(0, 28);

  return [
    'amount' => $amount,
    'currency' => 'usd',
    'interval' => $faker->randomElement(['day', 'week', 'month', 'year']),
    'nickname' => $faker->word,
    'active' => 1,
    'teams_enabled' => $teamEnable,
    'teams_limit' => $teams_limit,
    'trial_period_days' => $trialPeriod
  ];
});
