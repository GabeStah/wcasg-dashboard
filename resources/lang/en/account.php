<?php

$app_name = config('app.name');

return [
  'audit' => [
    'perform_button' => 'Perform an Audit'
  ],
  'extension' => [
    'action' =>
      'The action function is executed when the site passes the assertion check.',
    'add_new_button' => 'Add New Extension',
    'assertion' =>
      'The assertion function must return true for the action function to fire.',
    'back' => 'Back to Sites',
    'description' =>
      'Add extra logic and behaviors with extensions.  Each enabled extension is included with the widget payload associated with this site.  When an extension\'s assertion passes (returns true), the extension\'s action is executed.',
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
    ],
    'plans' => [
      'header' => 'Plans'
    ]
  ],
  'site' => [
    'add_new_button' => 'Add New Site',
    'must_be_active' => 'This site must be active.',
    'subscribe_to_add' => 'Subscribe now to create a site!',
    'widget_info' => "Copy and paste this line into your site's <head> section."
  ],
  'subscription' => [
    'invalid' => 'An active subscription is required.'
  ]
];
