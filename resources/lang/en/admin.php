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
      'Add extra logic and behaviors with extensions.  As an Admin, these are default extensions that are attached to every new User Site.  Each enabled extension is included with the widget payload associated with this site.  When an extension\'s assertion passes (returns true), the extension\'s action is executed.  Enabling a built-in extension will also enable it for new User Sites. However, Users can choose to manually disable a built-in extension.  Disabling a built-in extension on this page disables it for all User Sites.',
    'must_be_active' => 'This extension must be active.',
    'subscribe_to_add' => 'Subscribe now to create a custom extension!',
    'type' => [
      'built_in' =>
        'A built-in (default) extension is attached to every new User Site.  Enabling a built-in extension will also enable it for new User Sites.  However, Users can choose to manually disable a built-in extension.',
      'custom' => 'Custom extension created by you.'
    ]
  ],
  'coupon' => [
    'id' => 'Unique identifier entered by users when applying this coupon.',
    'currency' => 'Currency which to discount.',
    'duration' =>
      "Describes how long a customer who applies this coupon will get the discount.  'Forever' is indefinite, 'once' is a single discount, and 'repeating' is applied X number of times (see 'duration_in_months').",
    'duration_in_months' =>
      "If 'duration' is 'repeating', this is the number of months the coupon applies.  Ignored if coupon duration is 'forever' or 'once'.",
    'max_redemptions' =>
      'Maximum number of times this coupon can be redeemed, in total, across all customers, before it is no longer valid.  Leave blank for no maximum.',
    'metadata' => 'Additional JSON data related to coupon.',
    'name' => 'Name of the coupon displayed to customers on invoices.',
    'percent_off' =>
      'Percent that will be taken off when this coupon\' discount is applied.',
    'redeem_by' =>
      'Date after which coupon can no longer be redeemed.  If set, must be a date in the future.',
    'valid' =>
      'Taking account of other properties, whether this coupon can still be applied.'
  ],
  'plan' => [
    'active' =>
      'An active Plan is displayed in the store and Users can subscribe to it.',
    'amount' => 'The amount to charge at each specified interval.',
    'coupon' =>
      '(Optional) The coupon to apply to new subscriptions based on this Plan.',
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
