<?php

namespace CreatyDev\App\Exceptions\Api;

use CreatyDev\App\Exceptions\ApiException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class WebhookException extends ApiException {
  public $message = 'Webhook API request has failed.';
  public $headers = [
    'Content-Type' => 'application/json'
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
    $prefix = '';
    if (!isset($this->headers['Access-Control-Allow-Origin'])) {
      $this->setCorsOrigin(config('app.url'));
    }
    return response(
      json_encode([
        'error' => "{$prefix}{$this->getMessage()}",
        'status' => 401
      ]),
      401,
      $this->headers
    );
  }
}
