<?php

$app_name = config('app.name');

return [
  'audit' => [
    'perform-button' => 'Perform an Audit'
  ],
  'extension' => [
    'action' =>
      'The action function is executed when the site passes all assertion checks.',
    'add-new-button' => 'Add a New Extension',
    'assertion' =>
      'All assertion functions must return true for actions to fire.',
    'must-be-active' => 'This extension must be active.',
    'subscribe-to-add' => 'Subscribe now to create a custom extension!',
    'type' => [
      'built_in' => "Built-in extensions are provided by the $app_name staff and can be toggled, but cannot be modified.",
      'custom' => 'Custom extension created by you.'
    ]
  ],
  'site' => [
    'add-new-button' => 'Add a New Site',
    'must-be-active' => 'This site must be active.',
    'subscribe-to-add' => 'Subscribe now to create a site!'
  ],
  'subscription' => [
    'invalid' => 'An active subscription is required.'
  ]
];
