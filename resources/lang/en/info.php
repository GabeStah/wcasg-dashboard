<?php

return [
  'models' => [
    'StatementTemplate' => [
      'attributes' => []
    ]
  ],
  'views' => [
    'admin' => [
      'configuration' => [
        'disclaimer' =>
          'The default disclaimer shown to end users of the Widget.',
        'dashboard-panel-left' =>
          'The default Account Dashboard left panel content.',
        'dashboard-panel-right' =>
          'The default Account Dashboard right panel content.'
      ],
      'StatementTemplate' => [
        'columns' => [
          'actions' =>
            'Deletion disabled for default template and templates used by Sites.',
          'default-config' =>
            'Configuration all child Statements will default to, until overridden.',
          'is_default' =>
            "One template must be 'default' at all times.  Represents the fallback template sites will use upon creation.",
          'name' => 'Global template name. Visible to Users.',
          'sites-using' => 'User sites using this template.'
        ]
      ]
    ]
  ]
];
