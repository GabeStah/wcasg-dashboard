<?php

return [
  'models' => [
    'StatementTemplate' => [
      'attributes' => []
    ]
  ],
  'views' => [
    'admin' => [
      'StatementTemplate' => [
        'columns' => [
          'actions' =>
            'Deletion disabled for default template and templates used by Sites.',
          'default-config' =>
            'Configuration all child Statements will default to, until overridden.',
          'is-default' =>
            "One template must be 'default' at all times.  Represents the fallback template sites will use upon creation.",
          'name' => 'Global template name. Visible to Users.',
          'sites-using' => 'User sites using this template.'
        ]
      ]
    ]
  ]
];