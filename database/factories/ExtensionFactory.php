<?php

namespace database\factories\ExtensionFactory;

/** @var Factory $factory */

use CreatyDev\Domain\Extensions\Models\Extension;
use Faker\Generator as Faker;
use Illuminate\Database\Eloquent\Factory;
use Illuminate\Support\Str;

$factory->define(Extension::class, function (Faker $faker) {
  return [
    'description' => $faker->realText(200),
    'enabled' => true,
    'imported' => false,
    'name' => Str::studly($faker->company)
  ];
});
