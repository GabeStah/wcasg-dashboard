<?php

namespace CreatyDev\App\Exceptions;

use Exception;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Throwable;

class BaseException extends Exception {
  protected $message = 'Oops, something went wrong.';
  public $headers;
  public $view;

  public function __construct(
    View $view = null,
    $message = '',
    $code = 0,
    Throwable $previous = null
  ) {
    parent::__construct($message, $code, $previous);
    $this->message = $message ? $message : $this->message;
    $this->view = $view;
  }

  /**
   * Token parameter invalid.
   * Render the exception as an HTTP response.
   *
   * @param  Request  $request
   *
   * @return Factory|JsonResponse|Response|\Illuminate\View\View
   */
  public function render($request) {
    if ($this->view) {
      return $this->view->withErrors([$this->message]);
    } else {
      return response()->json(
        $this->getMessage(),
        200,
        $this->headers ? $this->headers : []
      );
    }
  }
}
