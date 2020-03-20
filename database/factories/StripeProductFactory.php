<?php

namespace database\factories\StripePlanFactory;

/** @var Factory $factory */

use Stripe\Product as StripeProduct;
use Faker\Generator as Faker;
use Illuminate\Database\Eloquent\Factory;

$factory->define(StripeProduct::class, function (Faker $faker) {
  return [
    'name' => $faker->words(3, true),
    'description' => $faker->sentence(),
    'unit_label' => $faker->word(),
    'statement_descriptor' => $faker->sentence(8)
  ];
});
