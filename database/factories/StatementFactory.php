<?php

/** @var Factory $factory */

use CreatyDev\Domain\Statements\Models\Statement;
use CreatyDev\Domain\Statements\Models\StatementTemplate;
use Faker\Generator as Faker;
use Illuminate\Database\Eloquent\Factory;

$factory->define(Statement::class, function (Faker $faker) {
  return [
    'statement_template_id' => factory(StatementTemplate::class)->create()
  ];
});
