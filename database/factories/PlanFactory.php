<?php

namespace database\factories\UserFactory;

/** @var Factory $factory */

use CreatyDev\Domain\Subscriptions\Models\Plan;
use Faker\Generator as Faker;
use Illuminate\Database\Eloquent\Factory;

/**
 * @see https://laravel.com/docs/6.x/database-testing#extending-factories
 */
$factory->define(Plan::class, function (Faker $faker) {
  $planName = $faker->words(3, true);
  $teamEnable = $faker->boolean;

  $slug = str_replace(' ', '-', $planName);
  $gateway_id = str_replace(' ', '_', $planName);
  $team_enable = $teamEnable;
  $teams_limit = $teamEnable ? $faker->numberBetween(0, 5) : 0;
  $price = $faker->numberBetween(0, 500);
  $trialPeriod = $faker->numberBetween(0, 28);

  // TODO: Delete existing products/plans/subs on init
  // see: https://stripe.com/docs/api/service_products/list

  $stripePlan = \Stripe\Plan::create([
    'amount' => $price,
    'interval' => $faker->randomElement(['day', 'week', 'month', 'year']),
    'product' => [
      'name' => $planName
    ],
    'currency' => 'usd',
    'id' => $gateway_id,
    'trial_period_days' => $trialPeriod
  ]);

  return [
    'name' => $faker->word,
    'gateway_id' => $gateway_id,
    'price' => $price,
    'interval' => 'month',
    'teams_enabled' => $team_enable,
    'teams_limit' => $teams_limit,
    'active' => 1,
    'slug' => $slug,
    'trial_period_days' => $trialPeriod
  ];
});
