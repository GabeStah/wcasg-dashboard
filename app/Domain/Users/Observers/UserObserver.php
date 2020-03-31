<?php

namespace CreatyDev\Domain\Users\Observers;

use CreatyDev\Domain\Users\Models\User;
use Illuminate\Support\Str;

class UserObserver {
  /**
   * Listen to User created event.
   *
   * @param User $user
   */
  public function created(User $user) {
    // Create API access token
    $user->createToken('api');
  }
}
