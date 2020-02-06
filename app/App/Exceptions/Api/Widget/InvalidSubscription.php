<?php

namespace CreatyDev\App\Exceptions\Api\Widget;

use CreatyDev\App\Exceptions\Api\Widget;
use Illuminate\Http\Response;
use Illuminate\Http\Request;

class InvalidSubscription extends Widget {
    public $message;

    public function __construct(
        $message = '',
        $code = 0,
        Throwable $previous = null
    ) {
        parent::__construct($message, $code, $previous);
        $this->message = __('error.api.widget.invalid-subscription');
    }

    /**
     * Token parameter invalid.
     * Render the exception as an HTTP response.
     *
     * @param  Request  $request
     * @return Response
     */
    public function render($request) {
        $this->setCorsOrigin($request->header('origin'));
        return parent::render($request);
    }
}
