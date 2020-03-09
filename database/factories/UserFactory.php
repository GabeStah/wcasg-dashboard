<?php

namespace database\factories\UserFactory;

/** @var Factory $factory */

use Faker\Generator as Faker;
use CreatyDev\Domain\Users\Models\User;
use Illuminate\Database\Eloquent\Factory;

/**
 * @see https://laravel.com/docs/6.x/database-testing#extending-factories
 */
$factory->define(User::class, function (Faker $faker) {
  return [
    'first_name' => $faker->firstName,
    'last_name' => $faker->lastName,
    'username' => $faker->unique()->userName,
    'phone' => $faker->phoneNumber,
    'email' => $faker->unique()->safeEmail,
    'password' =>
      '$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm', // secret
    'remember_token' => str_random(60),
    'activated' => $faker->boolean,
    'company_name' => $faker->company,
    'address1' => $faker->streetAddress,
    'address2' => $faker->secondaryAddress,
    'city' => $faker->city,
    'state' => $faker->state,
    'postal_code' => $faker->postcode,
    'country' => $faker->countryISOAlpha3
  ];
});
