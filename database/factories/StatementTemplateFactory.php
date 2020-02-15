<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use CreatyDev\Domain\Statements\Models\StatementTemplate;
use Faker\Generator as Faker;

$factory->define(StatementTemplate::class, function (Faker $faker) {
  return [
    'content' => $faker->randomHtml(2, 3)
  ];
});
