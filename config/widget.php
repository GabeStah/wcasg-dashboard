<?php

return [
  'admin_token' => env('WIDGET_ADMIN_DEFAULT_TOKEN'),
  'base' => [
    'filename' => env('WIDGET_BASE_FILE_NAME', 'widget.base.js'),
    'filepath' => storage_path(
      config('widget.base.files') . config('widget.base.filename')
    ),
    'files' => storage_path('app/widget')
  ]
];
