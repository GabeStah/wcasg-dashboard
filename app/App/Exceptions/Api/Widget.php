<?php

namespace CreatyDev\App\Exceptions\Api;

use CreatyDev\App\Exceptions\Api;
use Illuminate\Http\Response;
use Illuminate\Http\Request;
use Throwable;

class Widget extends Api {
    public $message = 'Widget API retrieval has failed.';
    public $headers;

    public function __construct(
        $message = '',
        $code = 0,
        Throwable $previous = null
    ) {
        parent::__construct($message, $code, $previous);

        // TODO: Move out of Exception to self-contained class
        $this->headers = [
            'Access-Control-Allow-Origin' => config('app.url'),
            'Content-Type' => 'text/javascript;charset=UTF-8'
        ];
    }

    /**
     * Origin invalid.
     * Render the exception as an HTTP response.
     *
     * @param  Request  $request
     * @return Response
     */
    public function render($request) {
        $prefix = '[' . config('app.name') . ']: ';
        return response(
            "console.error('{$prefix}{$this->getMessage()}')",
            200,
            $this->headers
        );
    }
}
