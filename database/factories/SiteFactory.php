<?php

namespace database\factories\SiteFactory;

/** @var Factory $factory */

use CreatyDev\Domain;
use CreatyDev\Domain\Sites\Models\Site;
use CreatyDev\Domain\Statements\Models\Statement;
use Faker\Generator as Faker;
use Illuminate\Database\Eloquent\Factory;

$factory->define(Site::class, function (Faker $faker) {
  $statement_id = null;
  if ($faker->numberBetween(0, 1) > 0.5) {
    $statement_id = factory(Statement::class)->create()->id;
  } else {
    $statements = Statement::all();
    if (count($statements) > 0) {
      $statement_id = $statements->random()->id;
    } else {
      $statement_id = factory(Statement::class)->create()->id;
    }
  }

  return [
    'active' => $faker->boolean,
    'domain' => $faker->domainName,
    'name' => $faker->company,
    'statement_id' => $statement_id
  ];
});
