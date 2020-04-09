<?php

return [
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
