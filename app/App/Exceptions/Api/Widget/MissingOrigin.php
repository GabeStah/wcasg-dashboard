<?php

namespace CreatyDev\App\Exceptions\Api\Widget;

use CreatyDev\App\Exceptions\Api\Widget;
use Illuminate\Http\Response;
use Illuminate\Http\Request;

class MissingOrigin extends Widget {
    public $message = 'Origin is missing.';

    /**
     * Origin missing.
     * Render the exception as a script response.
     *
     * @param  Request  $request
     * @return Response
     */
    public function render($request) {
        return parent::render($request);
    }
}
