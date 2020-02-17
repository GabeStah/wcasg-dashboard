<?php

/** @var Factory $factory */

use CreatyDev\Domain\Statements\Models\StatementTemplate;
use Faker\Generator as Faker;
use Illuminate\Database\Eloquent\Factory;

$factory->define(StatementTemplate::class, function (Faker $faker) {
  return [
    'content' => $faker->randomHtml(2, 3)
  ];
});
