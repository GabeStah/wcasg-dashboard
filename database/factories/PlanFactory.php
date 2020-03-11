<?php

namespace database\factories\PlanFactory;

/** @var Factory $factory */

use CreatyDev\Domain\Subscriptions\Models\Plan;
use Faker\Generator as Faker;
use Illuminate\Database\Eloquent\Factory;

$factory->define(Plan::class, function (Faker $faker) {
  $planName = $faker->words(3, true);
  $teamEnable = $faker->boolean;

  $slug = str_replace(' ', '-', $planName);
  $gateway_id = str_replace(' ', '_', $planName);
  $team_enable = $teamEnable;
  $teams_limit = $teamEnable ? $faker->numberBetween(0, 5) : 0;
  $price = $faker->numberBetween(0, 500);
  $trialPeriod = $faker->numberBetween(0, 28);

  return [
    'name' => $faker->word,
    'gateway_id' => $gateway_id,
    'price' => $price,
    'interval' => $faker->randomElement(['day', 'week', 'month', 'year']),
    'teams_enabled' => $team_enable,
    'teams_limit' => $teams_limit,
    'active' => 1,
    'slug' => $slug,
    'trial_period_days' => $trialPeriod
  ];
});
