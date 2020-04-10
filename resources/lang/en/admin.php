<?php

$app_name = config('app.name');

return [
  'extension' => [
    'action' =>
      'The action function is executed when the site passes the assertion check.',
    'add_new_button' => 'Add New Default Extension',
    'assertion' =>
      'The assertion function must return true for the action function to fire.',
    'back' => 'Back to Sites',
    'description' =>
      'Add extra logic and behaviors with extensions.  As an Admin, these are default extensions that are attached to every new User Site.  Each enabled extension is included with the widget payload associated with this site.  When an extension\'s assertion passes (returns true), the extension\'s action is executed.',
    'must_be_active' => 'This extension must be active.',
    'subscribe_to_add' => 'Subscribe now to create a custom extension!',
    'type' => [
      'built_in' =>
        'A built-in (default) extension is attached to every new User Site.  Enabling a built-in extension will also enable it for new User Sites.  However, Users can choose to manually disable a built-in extension.',
      'custom' => 'Custom extension created by you.'
    ]
  ],
  'plan' => [
    'amount' => 'The amount to charge at each specified interval.',
    'interval' => 'The frequency at which a subscription is billed.',
    'product' => 'The product whose pricing this plan determines.',
    'stripe_mention' => 'The new plan is automatically added to Stripe.',
    'trial_period_days' =>
      'Default number of trial days when subscribing a customer to this plan.'
  ],
  'product' => [
    'unit_label' =>
      'Name of singular item associated with product (i.e. site, gigabyte, hour, etc).',
    'statement_descriptor' =>
      'An arbitrary string to be displayed on your customer’s credit card or bank statement. This may be up to 22 characters.'
  ],
  'restraint' => [
    'description' =>
      '(Optional) Place a business logic restraint on this entity.  For example, a Plan.Restraint of "site <= 5" restricts Plan subscribers to (5) or fewer Sites.  Enter empty value to remove restraint.'
  ]
];
