<?php

namespace database\factories\ConfigurationFactory;

/** @var Factory $factory */

use CreatyDev\Domain\Configuration\Models\Configuration;
use Faker\Generator as Faker;
use Illuminate\Database\Eloquent\Factory;

$factory->define(Configuration::class, function (Faker $faker) {
  return [];
});
