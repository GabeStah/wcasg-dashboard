<?php

namespace CreatyDev\Domain;

use Illuminate\Contracts\Validation\Rule;

class UrlPathable implements Rule {
  /**
   * Create a new rule instance.
   *
   * @return void
   */
  public function __construct() {
    //
  }

  /**
   * Determine if the validation rule passes.
   *
   * @param  string  $attribute
   * @param  mixed  $value
   * @return bool
   */
  public function passes($attribute, $value) {
    return parse_url($value, PHP_URL_PATH);
  }

  /**
   * Get the validation error message.
   *
   * @return string
   */
  public function message() {
    return 'The :attribute must be a valid URL path.';
  }
}
