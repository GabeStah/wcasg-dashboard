<?php

namespace database\factories\UserFactory;

/** @var Factory $factory */

use CreatyDev\Domain\Subscriptions\Models\Plan;
use Faker\Generator as Faker;
use Illuminate\Database\Eloquent\Factory;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

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

    //    $stripePlans = \Stripe\Plan::all();
    // TODO: Delete existing products/plans/subs on init
    // see: https://stripe.com/docs/api/service_products/list
    // Delete existing plans
    //    foreach (\Stripe\Plan::all()->data as $key => $plan) {
    //        \Stripe\Plan::retrieve($plan->id)->delete();
    //    }

    //    $stripePlan = \Stripe\Plan::retrieve($gateway_id);
    //    dump($stripePlan);
    //    if (!$stripePlan) {
    //    dump('stripePlan not found');
    // Create Stripe plan if doesn't exist
    \Stripe\Plan::create([
        'amount' => $price,
        'interval' => 'month',
        'product' => [
            'name' => $planName
        ],
        'currency' => 'usd',
        'id' => $gateway_id,
        'trial_period_days' => $trialPeriod
    ]);
    //    }

    //    $plan = new Plan();
    //
    //    $plan->save();
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
