<?php

/** @var Factory $factory */

use CreatyDev\Domain;
use CreatyDev\Domain\Sites\Models\Site;
use Faker\Generator as Faker;
use Illuminate\Database\Eloquent\Factory;

$factory->define(Site::class, function (Faker $faker) {
  return [
    'active' => $faker->boolean,
    'domain' => $faker->domainName
  ];
});
