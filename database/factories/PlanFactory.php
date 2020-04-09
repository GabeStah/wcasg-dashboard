<?php

namespace database\factories\PlanFactory;

/** @var Factory $factory */

use CreatyDev\App\JsonSchemaValidator\JsonSchemaValidatorService;
use CreatyDev\Domain\Subscriptions\Models\Plan;
use Faker\Generator as Faker;
use Illuminate\Database\Eloquent\Factory;

// Cannot use dependency injection in Faker factory definition, so pull service from app and pass to closure.
$validatorService = app(JsonSchemaValidatorService::class);

$factory->define(Plan::class, function (Faker $faker) use ($validatorService) {
  $teamEnable = $faker->boolean;
  $teams_limit = $teamEnable ? $faker->numberBetween(0, 5) : 0;
  $amount = $faker->numberBetween(0, 2500);
  $trialPeriod = $faker->numberBetween(0, 28);
  $withContext = true;
  $data = [
    'amount' => $amount,
    'currency' => 'usd',
    'interval' => $faker->randomElement(['day', 'week', 'month', 'year']),
    'nickname' => $faker->word,
    'active' => true,
    'teams_enabled' => $teamEnable,
    'teams_limit' => $teams_limit,
    'trial_period_days' => $trialPeriod
  ];

  if ($withContext) {
    $context = $validatorService->createContext(
      'plan',
      (object) [
        'entity' => 'site',
        'comparator' => $faker->randomElement(['<=']),
        'value' => $faker->randomElement([5])
      ]
    );
    if ($context) {
      $data['context'] = $context;
    }
  }

  return $data;
});
