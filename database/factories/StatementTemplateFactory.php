<?php

/** @var Factory $factory */

use CreatyDev\Domain\Statements\Models\StatementTemplate;
use Faker\Generator as Faker;
use Illuminate\Database\Eloquent\Factory;

$factory->define(StatementTemplate::class, function (Faker $faker) {
  $templates = [
    [
      'content' => app('files')->get(
        //        resource_path('assets/templates/default.html')
        resource_path('assets/templates/default.html')
      ),
      'name' => 'Default'
    ],
    [
      'content' => app('files')->get(
        //        resource_path('assets/templates/extra.html')
        resource_path('assets/templates/extra.html')
      ),
      'name' => 'Extra'
    ],
    [
      'content' => app('files')->get(
        //        resource_path('assets/templates/small.html')
        resource_path('assets/templates/small.html')
      ),
      'name' => 'Small'
    ]
  ];

  return $faker->randomElement($templates);
});
