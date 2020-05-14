<?php
/**
 * Created by PhpStorm.
 * User: CreatyDev
 * Date: 12/29/2017
 * Time: 2:38 AM
 */

namespace CreatyDev\App\Traits\Eloquent\Auth;

use Carbon\Carbon;
use CreatyDev\Domain\ConfirmationToken;

trait HasConfirmationToken {
  /**
   *  Generates a confirmation token for a user.
   * @param Carbon $expiresAt
   * @return string
   */
  public function generateConfirmationToken(Carbon $expiresAt = null) {
    $this->confirmationToken()->create([
      'token' => ($token = str_random(200)),
      'expires_at' => $expiresAt ?? $this->getConfirmationTokenExpiry()
    ]);

    return $token;
  }

  protected function getConfirmationTokenExpiry($expires_in_minutes = 10) {
    return $this->freshTimestamp()->addMinutes($expires_in_minutes);
  }

  /**
   * Get's the user's confirmation token.
   *
   * @return mixed
   */
  public function confirmationToken() {
    return $this->hasOne(ConfirmationToken::class);
  }
}
