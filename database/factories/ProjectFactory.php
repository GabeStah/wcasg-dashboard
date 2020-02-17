<?php

/** @var Factory $factory */

use CreatyDev\Domain\Projects\Models\Project;
use Faker\Generator as Faker;
use Illuminate\Database\Eloquent\Factory;

$factory->define(Project::class, function (Faker $faker) {
  return [
    'name' => $faker->unique()->words(3, true),
    'slug' => $faker->unique()->slug(3)
  ];
});
