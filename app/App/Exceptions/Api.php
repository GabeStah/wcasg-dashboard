<?php

namespace CreatyDev\App\Exceptions;

use Exception;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class Api extends Exception {
    protected $message = 'API request has failed.';
    public $headers;

    /**
     * Render the exception as a script response.
     *
     * @param  Request  $request
     * @return Response
     */
    public function render($request) {
        return response(
            "console.error('{$this->getMessage()}')",
            200,
            $this->headers
        );
    }
}
