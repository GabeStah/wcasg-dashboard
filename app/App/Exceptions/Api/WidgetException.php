<?php

namespace CreatyDev\App\Exceptions\Api;

use CreatyDev\App\Exceptions\ApiException;
use Illuminate\Http\Response;
use Illuminate\Http\Request;
use Throwable;

class WidgetException extends ApiException {
  public $message = 'Widget API retrieval has failed.';
  public $headers = [
    'Content-Type' => 'text/javascript;charset=UTF-8'
  ];

  public function setCorsOrigin($value) {
    $this->headers['Access-Control-Allow-Origin'] = $value;
  }

  /**
   * Origin invalid.
   * Render the exception as an HTTP response.
   *
   * @param Request $request
   * @return Response
   */
  public function render($request) {
    $prefix = '[' . config('app.name') . ']: ';
    if (!isset($this->headers['Access-Control-Allow-Origin'])) {
      $this->setCorsOrigin(config('app.url'));
    }
    return response(
      "console.error('{$prefix}{$this->getMessage()}')",
      200,
      $this->headers
    );
  }
}
