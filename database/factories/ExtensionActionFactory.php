<?php

namespace database\factories\ExtensionActionFactory;

/** @var Factory $factory */

use CreatyDev\Domain\Extensions\Models\Action;
use Faker\Generator as Faker;
use Illuminate\Database\Eloquent\Factory;
use Illuminate\Support\Facades\Storage;

$factory->define(Action::class, function (Faker $faker) {
  $file = array_random(Storage::disk('extensions')->files('actions'));
  $content = Storage::disk('extensions')->get($file);

  return [
    'function' => $content,
    'name' => basename($file, '.js')
  ];
});
