<?php

return [
  'plan' => [
    'amount' => 'The amount in cents to be charged on the interval specified.',
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
  ]
];
