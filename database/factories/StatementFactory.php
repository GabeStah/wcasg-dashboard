<?php

/** @var Factory $factory */

use CreatyDev\Domain\Statements\Models\Statement;
use CreatyDev\Domain\Statements\Models\StatementTemplate;
use Faker\Generator as Faker;
use Illuminate\Database\Eloquent\Factory;

$factory->define(Statement::class, function (Faker $faker) {
  $template_id = null;
  if ($faker->numberBetween(0, 1) > 0.5) {
    $template_id = factory(StatementTemplate::class)->create()->id;
  } else {
    $statements = StatementTemplate::all();
    if (count($statements) > 0) {
      $template_id = $statements->random()->id;
    } else {
      $template_id = factory(StatementTemplate::class)->create()->id;
    }
  }
  return [
    'statement_template_id' => $template_id
  ];
});
