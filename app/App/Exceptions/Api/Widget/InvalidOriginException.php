<?php

namespace CreatyDev\App\Exceptions\Api\Widget;

use CreatyDev\App\Exceptions\Api\WidgetException;
use Illuminate\Http\Response;
use Illuminate\Http\Request;

class InvalidOriginException extends WidgetException {
  public $message;

  public function __construct(
    $message = '',
    $code = 0,
    Throwable $previous = null
  ) {
    parent::__construct($message, $code, $previous);
    $this->message = __('error.api.invalid-origin');
  }

  /**
   * Origin invalid.
   * Render the exception as an HTTP response.
   *
   * @param Request $request
   * @return Response
   */
  public function render($request) {
    $this->setCorsOrigin($request->header('origin'));
    return parent::render($request);
  }
}