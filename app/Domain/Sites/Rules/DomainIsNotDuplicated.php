<?php

namespace CreatyDev\Domain\Sites\Rules;

use CreatyDev\Domain\Users\Models\User;
use Illuminate\Contracts\Validation\Rule;

class DomainIsNotDuplicated implements Rule {
  public $user;

  public function __construct(User $user) {
    $this->user = $user;
  }

  /**
   * Determine if the validation rule passes.
   *
   * @param  string $attribute
   * @param  mixed $value
   * @return bool
   */
  public function passes($attribute, $value) {
    $domain = get_domain($value);
    if ($domain) {
      return $this->user
        ->sites()
        ->where('domain', $domain)
        ->count()
        ? false
        : true;
    }

    return true;
  }

  /**
   * Get the validation error message.
   *
   * @return string
   */
  public function message() {
    return 'You\'ve already used this domain in another site.';
  }
}
