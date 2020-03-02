<?php

namespace CreatyDev\App\Exceptions\Api\Widget;

use CreatyDev\App\Exceptions\Api\WidgetException;
use Illuminate\Http\Response;
use Illuminate\Http\Request;
use Throwable;

class MissingOriginException extends WidgetException {
  public $message;

  public function __construct(
    $message = '',
    $code = 0,
    Throwable $previous = null
  ) {
    parent::__construct($message, $code, $previous);
    $this->message = __('error.api.missing-origin');
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
