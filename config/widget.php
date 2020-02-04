<?php

return [
    'base' => [
        'filename' => env('WIDGET_BASE_FILE_NAME'),
        'filepath' => storage_path(
            config('widget.base.files') . config('widget.base.filename')
        ),
        'files' => storage_path('app/widget')
    ]
];
