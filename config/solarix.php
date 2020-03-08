<?php

return [
  'cc' => [
    'prepaid' => [
      'name' => env('SOLARIX_CC_PREPAID_NAME'),
      'number' => env('SOLARIX_CC_PREPAID_NUMBER'),
      'month' => env('SOLARIX_CC_PREPAID_EXP_MONTH'),
      'year' => env('SOLARIX_CC_PREPAID_EXP_YEAR'),
      'cvc' => env('SOLARIX_CC_PREPAID_CVC')
    ]
  ]
];
