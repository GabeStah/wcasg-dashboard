<?php

namespace CreatyDev\App\Exceptions;

use CreatyDev\App\Api\ApiResponse;
use CreatyDev\App\Traits\Api\ApiRequestable;
use Exception;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Throwable;

class BaseException extends Exception {
  use ApiRequestable;

  protected $code = 1;
  protected $message = 'Oops, something went wrong.';
  protected $headers = [];
  protected $view = null;

  public function __construct(
    $message = null,
    View $view = null,
    $code = null,
    Throwable $previous = null
  ) {
    parent::__construct($message, $code, $previous);

    if (isset($code)) {
      $this->code = $code;
    }
    if (isset($message)) {
      $this->message = $message;
    }
    if (isset($view)) {
      $this->view = $view;
    }
  }

  /**
   * Token parameter invalid.
   * Render the exception as an HTTP response.
   *
   * @param  Request  $request
   *
   * @return ApiResponse|Factory|JsonResponse|Response|\Illuminate\View\View
   */
  public function render(Request $request) {
    if ($this->view && !$this->isApiRequest($request)) {
      return $this->view->withErrors([$this->message]);
    } else {
      return new ApiResponse(null, 500, null, $this);
    }
  }
}
