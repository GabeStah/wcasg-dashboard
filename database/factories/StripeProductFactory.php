<?php

namespace database\factories\StripePlanFactory;

/** @var Factory $factory */

use Stripe\Product as StripeProduct;
use Faker\Generator as Faker;
use Illuminate\Database\Eloquent\Factory;

$factory->define(StripeProduct::class, function (Faker $faker) {
  $products = [
    [
      'name' => 'iPhone 11 Pro',
      'description' =>
        'All-new triple-camera system Up to 20 hours of video playback Water resistant to a depth of 4 meters for up to 30 minutes.',
      'unit_label' => 'phone'
    ],
    [
      'name' => 'Echo Dot',
      'description' =>
        'Echo Dot is a voice-controlled smart speaker with Alexa, perfect for any room.',
      'unit_label' => 'dot'
    ],
    [
      'name' => 'Amazon Kindle',
      'description' =>
        'Meet the Kindle, now with a built-in adjustable front light so you can read indoors and outdoors and at more times of day. Purpose-built for reading, Kindle features a glare-free touchscreen display that reads like real paper, even in direct sunlight.',
      'unit_label' => 'kindle'
    ],
    [
      'name' => 'Widget Service',
      'description' =>
        'WCASG Widget service provides state of the art accessibility support, government compliance, and user-defined customization for your site.',
      'unit_label' => 'site'
    ],
    [
      'name' => 'USB Cable',
      'description' => 'Plug stuff into other stuff.  Cool.',
      'unit_label' => 'cable'
    ],
    [
      'name' => 'Doom: Eternal',
      'description' =>
        'Hell’s armies have invaded Earth. Become the Slayer in an epic single-player campaign to conquer demons across dimensions and stop the final destruction of humanity.',
      'unit_label' => 'game'
    ],
    [
      'name' => 'Car Tire',
      'description' => 'It\'s round and it lets you go forward!',
      'unit_label' => 'tire'
    ],
    [
      'name' => 'Fidget Spinner',
      'description' => 'I just can\'t sit still.  SEND HELP!',
      'unit_label' => 'spinner'
    ],
    [
      'name' => 'Twitch Prime',
      'description' =>
        'The Amazon Prime home for gamers. Every month, get exclusive in-game loot, free games, a free subscription on Twitch.tv.',
      'unit_label' => 'subscription'
    ]
  ];

  $element = $faker->randomElement($products);

  return [
    'name' => $element['name'],
    'description' => $element['description'],
    'unit_label' => $element['unit_label'],
    'statement_descriptor' => substr($element['name'], 0, 22)
  ];
});
