<?php

$app_name = config('app.name');

return [
  'audit' => [
    'perform_button' => 'Perform an Audit'
  ],
  'extension' => [
    'action' =>
      'The action function is executed when the site passes all assertion checks.',
    'add_new_button' => 'Add a New Extension',
    'assertion' =>
      'All assertion functions must return true for actions to fire.',
    'must_be_active' => 'This extension must be active.',
    'subscribe_to_add' => 'Subscribe now to create a custom extension!',
    'type' => [
      'built_in' => "Built-in extensions are provided by the $app_name staff and can be toggled, but cannot be modified.",
      'custom' => 'Custom extension created by you.'
    ]
  ],
  'sidebar' => [
    'dashboard' => [
      'header' => 'Dashboard'
    ],
    'account' => [
      'header' => 'Account',
      'items' => [
        'overview' => 'Account Overview',
        'profile' => 'Profile',
        'change_password' => 'Change Password',
        'deactivate' => 'Deactivate Account',
        'two_factor_auth' => 'Two-Factor Authentication'
      ]
    ],
    'subscription' => [
      'header' => 'Subscription',
      'items' => [
        'change_plan' => 'Change Plan',
        'invoices' => 'Invoices',
        'update_card' => 'Update Card',
        'resume' => 'Resume Subscription'
      ]
    ],
    'sites' => [
      'header' => 'Sites'
    ],
    'audits' => [
      'header' => 'Audits'
    ],
    'developer' => [
      'header' => 'Developer'
    ],
    'tickets' => [
      'header' => 'Tickets'
    ],
    'api' => [
      'header' => 'API'
    ],
    'notifications' => [
      'header' => 'Notifications'
    ]
  ],
  'site' => [
    'add_new_button' => 'Add a New Site',
    'must_be_active' => 'This site must be active.',
    'subscribe_to_add' => 'Subscribe now to create a site!'
  ],
  'subscription' => [
    'invalid' => 'An active subscription is required.'
  ]
];
