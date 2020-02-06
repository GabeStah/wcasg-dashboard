<?php

namespace CreatyDev\App\Exceptions\Api\Widget;

use CreatyDev\App\Exceptions\Api\Widget;
use Illuminate\Http\Response;
use Illuminate\Http\Request;
use Throwable;

class MissingOrigin extends Widget {
    public $message;

    public function __construct(
        $message = '',
        $code = 0,
        Throwable $previous = null
    ) {
        parent::__construct($message, $code, $previous);
        $this->message = __('error.api.widget.missing-origin');
    }

    /**
     * Origin missing.
     * Render the exception as a script response.
     *
     * @param Request $request
     * @return Response
     */
    public function render($request) {
        return parent::render($request);
    }
}
