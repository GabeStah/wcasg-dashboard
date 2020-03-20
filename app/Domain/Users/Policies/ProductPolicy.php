<?php

namespace CreatyDev\Domain\Users\Policies;

use CreatyDev\Domain\Product;
use CreatyDev\Domain\Users\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class ProductPolicy {
  use HandlesAuthorization;

  public function before(User $user, $ability) {
    if ($user->hasRole('admin-root') || $user->can('manage products')) {
      return true;
    }
  }

  /**
   * Placeholder method to allow Gate controller auth checking.
   * ProductPolicy->before() method called initially and performs actual auth logic.
   *
   * @param User    $user
   * @param Product $product
   *
   * @return bool
   */
  public function manage(User $user, Product $product) {
    return false;
  }
}
