<?php

namespace CreatyDev\App\Traits\Api;

/**
 * Allow override widget token to be provided.
 *
 * Trait AllowWidgetAdminToken
 */
trait AllowWidgetAdminToken {
  /**
   * Check if request 'token' matches widget admin token.
   *
   * @return bool
   */
  protected function hasAdminToken() {
    return config('widget.admin_token') === request('token');
  }
}
