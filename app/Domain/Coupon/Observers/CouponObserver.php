<?php

namespace CreatyDev\Domain\Coupon\Observers;

use CreatyDev\Domain\Coupon\Models\Coupon;

class CouponObserver {
  /**
   * Business logic before Coupon created.
   *
   * @param Coupon $coupon
   * @return Coupon
   */
  public function creating(Coupon $coupon) {
    // Stripe
    \Stripe\Coupon::create($coupon->toStripe());

    return $coupon;
  }

  /**
   * Business logic before Coupon deleted
   *
   * @param Coupon $coupon
   * @return Coupon
   */
  public function deleting(Coupon $coupon) {
    $stripe_coupon = \Stripe\Coupon::retrieve($coupon->id);
    $stripe_coupon->delete();

    return $coupon;
  }

  /**
   * Business logic before Coupon updated.
   *
   * @param Coupon $coupon
   * @return Coupon
   */
  public function updating(Coupon $coupon) {
    // Update Stripe if name dirty
    if ($coupon->isDirty(['name'])) {
      \Stripe\Coupon::update($coupon->id, [
        'name' => $coupon->name
      ]);
    }

    return $coupon;
  }
}
