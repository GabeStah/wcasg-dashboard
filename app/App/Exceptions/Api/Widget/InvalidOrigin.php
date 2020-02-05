<?php

namespace CreatyDev\App\Exceptions\Api\Widget;

use CreatyDev\App\Exceptions\Api\Widget;
use Illuminate\Http\Response;
use Illuminate\Http\Request;

class InvalidOrigin extends Widget {
    protected $message = 'Origin is invalid.';

    /**
     * Origin invalid.
     * Render the exception as an HTTP response.
     *
     * @param  Request  $request
     * @return Response
     */
    public function render($request) {
        return parent::render($request);
    }
}
