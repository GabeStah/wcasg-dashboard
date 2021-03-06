<?php

return [
  /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Stripe, Mailgun, SparkPost and others. This file provides a sane
    | default location for this type of information, allowing packages
    | to have a conventional place to find your various credentials.
    |
    */

  'mailgun' => [
    'domain' => env('MAILGUN_DOMAIN'),
    'secret' => env('MAILGUN_SECRET')
  ],

  'ses' => [
    'key' => env('SES_KEY'),
    'secret' => env('SES_SECRET'),
    'region' => 'us-east-1'
  ],

  'sparkpost' => [
    'secret' => env('SPARKPOST_SECRET')
  ],

  'stripe' => [
    'model' => CreatyDev\Domain\Users\Models\User::class,
    'key' => env('STRIPE_KEY'),
    'secret' => env('STRIPE_SECRET'),
    'reset_on_seed' => env('STRIPE_RESET_ON_SEED', false)
  ],

  'authy' => [
    'secret' => env('AUTHY_SECRET')
  ],

  'pa11y' => [
    'endpoint' => env('PA11Y_WEBSERVICE_ENDPOINT')
  ]
];
