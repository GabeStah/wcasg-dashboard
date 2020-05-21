<?php

namespace CreatyDev\Domain;

use Illuminate\Contracts\Validation\Rule;
use Illuminate\Support\Facades\Route;

class Routable implements Rule {
  /**
   * Create a new rule instance.
   *
   * @return void
   */
  public function __construct() {
    //
  }

  /**
   * Determine if path value is valid route and not a match of an existing route.
   *
   * @param  string  $attribute
   * @param  mixed  $value
   * @return bool
   */
  public function passes($attribute, $value) {
    $passes = true;
    collect(Route::getRoutes())->each(function ($route) use (&$passes, $value) {
      $parts = explode('/', $route->uri);
      if ($parts[0] === $value) {
        $passes = false;
        return false;
      }
    });
    return $passes;
  }

  /**
   * Get the validation error message.
   *
   * @return string
   */
  public function message() {
    return 'The :attribute must be unique and may not match an existing app route path.';
  }
}
