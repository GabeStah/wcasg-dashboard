<?php

return [
  'api' => [
    'audit' => [
      'expired' => 'Audit has expired.',
      'incomplete' => 'Audit is incomplete.  Please check back soon.',
      'invalid' => 'Audit is invalid.',
      'running' => 'Audit is still processing.  Please wait.'
    ],
    'authorization' => [
      'invalid' => 'Invalid authorization to complete this request.'
    ],
    'invalid_origin' => 'Request origin is invalid.',
    'inactive_site' =>
      'This site is currently marked inactive. Please contact an administrator.',
    'invalid_site' => 'Site is invalid.',
    'invalid_subscription' =>
      'The subscription associated with this site is disabled or invalid.',
    'invalid_token' => 'Token parameter is invalid.',
    'missing_origin' =>
      'Request origin cannot be determined.  Cross Origin request has failed.',
    'missing_token' =>
      'A token parameter is required to complete this request.',
    'webhook' => [
      'invalid_id' => 'Invalid id specified.',
      'invalid_token' => 'Invalid token specified.',
      'invalid_type' => 'Invalid type specified.',
      'missing_id' => 'No id specified.',
      'missing_token' =>
        'A token parameter is required to complete this request.',
      'missing_type' => 'No type specified.'
    ]
  ]
];
