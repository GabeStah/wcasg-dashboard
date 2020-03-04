<?php

namespace database\factories\ExtensionActionFactory;

/** @var Factory $factory */

use CreatyDev\Domain\Extensions\Models\Predicate;
use Faker\Generator as Faker;
use Illuminate\Database\Eloquent\Factory;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

$factory->define(Predicate::class, function (Faker $faker) {
  $file = array_random(Storage::disk('extensions')->files('predicates'));
  $content = Storage::disk('extensions')->get($file);

  return [
    'function' => $content,
    'name' => Str::studly($faker->company)
  ];
});
