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
  ],
  'coeus' => [
    'db' => env('COEUS_DB', 'wcasg'),
    'collections' => [
      'statistics' => env(
        'COEUS_COLLECTION_STATISTICS',
        'srn:coeus:wcasg:widget:dashboard::collection/statistics'
      )
    ],
    'token' => env('COEUS_TOKEN'),
    'url' => env('COEUS_URL', 'https://coeus.solarix.tools')
  ],
  'connector' => [
    'endpoint' => env(
      'CONNECTOR_ENDPOINT',
      'http://wcasg-connector.pngpub.com:4321'
    ),
    'intuit_authorize_endpoint' => env(
      'CONNECTOR_INTUIT_AUTHORIZE_ENDPOINT',
      'http://wcasg-connector.pngpub.com:4321/v1/intuit/authorize'
    )
  ]
];
