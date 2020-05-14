<?php

namespace CreatyDev\App\Exceptions\Api\Webhook;

use CreatyDev\App\Exceptions\Api\WebhookException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Throwable;

class WebhookMissingIdException extends WebhookException {
  public $message;

  public function __construct(
    $message = '',
    $code = 0,
    Throwable $previous = null
  ) {
    parent::__construct($message, $code, $previous);
    $this->message = __('error.api.webhook.missing_id');
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
