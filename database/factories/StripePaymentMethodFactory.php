<?php

namespace database\factories\StripePaymentMethodFactory;

/** @var Factory $factory */

use Faker\Generator as Faker;
use Illuminate\Database\Eloquent\Factory;
use Stripe\PaymentMethod;

$factory->define(PaymentMethod::class, function (Faker $faker) {
  $ccNumbers = [
    4242424242424242,
    4000056655665556,
    5555555555554444,
    2223003122003222,
    5200828282828210,
    5105105105105100,
    378282246310005,
    371449635398431,
    6011111111111117,
    6011000990139424,
    3056930009020004,
    36227206271667,
    3566002020360505,
    6200000000000005
  ];

  return [
    'type' => 'card',
    'card' => [
      'number' => $faker->randomElement($ccNumbers),
      'exp_month' => $faker->month,
      'exp_year' => date(
        'Y',
        strtotime('+' . $faker->numberBetween(2, 10) . ' years')
      ),
      'cvc' => $faker->numberBetween(100, 999)
    ]
  ];
});
