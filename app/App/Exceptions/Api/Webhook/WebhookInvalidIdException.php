<?php

namespace CreatyDev\App\Exceptions\Api\Webhook;

use CreatyDev\App\Exceptions\Api\WebhookException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Throwable;

class WebhookInvalidIdException extends WebhookException {
  public $message;

  public function __construct(
    $message = '',
    $code = 0,
    Throwable $previous = null
  ) {
    parent::__construct($message, $code, $previous);
    $this->message = __('error.api.webhook.invalid_id');
  }

  /**
   * Origin invalid.
   * Render the exception as an HTTP response.
   *
   * @param Request $request
   * @return Response
   */
  public function render($request) {
    return parent::render($request);
  }
}
