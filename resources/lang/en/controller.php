<?php

return [
  'account' => [
    'Site' => [
      'create' => [
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
          'is-default' =>
            'Cannot delete default template.  Assign default to a different template and try again.',
          'in-use' => 'Cannot delete a template currently in use.'
        ]
      ],
      'update' => [
        'success' => 'The template has been updated.'
      ]
    ]
  ]
];
