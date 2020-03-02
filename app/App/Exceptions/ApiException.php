<?php

namespace CreatyDev\App\Exceptions;

use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ApiException extends Exception {
  protected $message = 'API request has failed.';
  public $headers;

  /**
   * Render the exception as a script response.
   *
   * @param  Request  $request
   * @return Response|JsonResponse
   */
  public function render($request) {
    return response()->json(
      $this->getMessage(),
      200,
      $this->headers ? $this->headers : []
    );
  }
}
