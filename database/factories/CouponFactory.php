<?php

namespace database\factories\ExtensionFactory;

/** @var Factory $factory */

use CreatyDev\Domain\Coupon\Models\Coupon;
use Faker\Generator as Faker;
use Illuminate\Database\Eloquent\Factory;
use Illuminate\Support\Str;

$factory->define(Coupon::class, function (Faker $faker) {
  $duration = $faker->randomElement(['forever', 'once', 'repeating']);
  $duration_in_months =
    $duration === 'repeating' ? $faker->numberBetween(1, 12) : null;
  $percent_off = $faker->randomFloat(0, 0.01, 100);
  $name =
    $percent_off .
    '% off ' .
    ($duration === 'forever'
      ? $duration
      : ($duration
        ? ($duration_in_months
          ? 'for ' . $duration_in_months . ' months'
          : '')
        : ''));
  $code = strtoupper(
    Str::snake(
      $percent_off .
        '_off_' .
        $duration .
        ($duration_in_months ? '_' . $duration_in_months : '')
    )
  );

  return [
    'code' => $code,
    'currency' => 'usd',
    'duration' => $duration,
    'duration_in_months' => $duration_in_months,
    'max_redemptions' => $faker->boolean() ? $faker->numberBetween(1, 5) : null,
    'metadata' => null,
    'name' => $name,
    'percent_off' => $percent_off,
    'redeem_by' => $faker->dateTimeBetween('now', '+48 hours'),
    'valid' => true
  ];
});
