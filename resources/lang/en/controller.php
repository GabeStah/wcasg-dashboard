<?php

return [
  'account' => [
    'Site' => [
      'create' => [
        'error' => [
          'too_many_sites' =>
            'You have reached the maximum active sites for your current subscription plan.  Please upgrade your plan to add more.'
        ],
        'success' => 'The site has been created.'
      ],
      'destroy' => [
        'success' => 'The site has been deleted.'
      ],
      'update' => [
        'success' => 'The site has been updated.'
      ],
      'Statement' => [
        'create' => [
          'success' => 'The accessibility statement has been created.'
        ],
        'destroy' => [
          'success' => 'The accessibility statement has been deleted.'
        ],
        'update' => [
          'success' => 'The accessibility statement has been updated.'
        ]
      ]
    ]
  ],
  'admin' => [
    'Configuration' => [
      'disclaimer' => [
        'update' => [
          'success' => 'Configuration has been updated.'
        ]
      ]
    ],
    'Statement' => [
      'create' => [
        'success' => 'The accessibility statement has been created.'
      ],
      'destroy' => [
        'success' => 'The accessibility statement has been deleted.'
      ],
      'update' => [
        'success' => 'The accessibility statement has been updated.'
      ]
    ],
    'StatementTemplate' => [
      'create' => [
        'success' => 'The template has been created.'
      ],
      'destroy' => [
        'success' => 'The template has been deleted.',
        'fail' => [
          'is_default' =>
            'Cannot delete default template.  Assign default to a different template and try again.',
          'in_use' => 'Cannot delete a template currently in use.'
        ]
      ],
      'update' => [
        'success' => 'The template has been updated.'
      ]
    ]
  ],
  'checkout' => [
    'payment' => [
      'cart' => [
        'payment_info_required' =>
          'Please enter your credit card information below and confirm your billing address.',
        'no_payment_info_required' =>
          'Awesome! Your order total is eligible to subscribe without providing a credit card.'
      ],
      'coupon' => [
        'status' => [
          'applied' => 'The total reflects the applied promo code.',
          'default' => 'If you have a promo code enter it above.',
          'invalid' => 'This promo code is invalid.',
          'used' =>
            'This coupon has already been used by this account.  You may proceed at the normal price.'
        ]
      ]
    ]
  ]
];
