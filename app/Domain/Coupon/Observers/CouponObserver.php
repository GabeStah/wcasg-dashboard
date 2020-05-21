<?php

namespace CreatyDev\Domain\Coupon\Observers;

use CreatyDev\Domain\Coupon\Models\Coupon;
use Illuminate\Support\Str;

class CouponObserver {
  /**
   * Business logic before Coupon created.
   *
   * @param Coupon $coupon
   * @return Coupon
   */
  public function creating(Coupon $coupon) {
    try {
      // Find existing from Stripe.
      // Throws InvalidRequest if not found.
      \Stripe\Coupon::retrieve($coupon->id);
      return $coupon;
    } catch (\Stripe\Error\InvalidRequest $e) {
      // Generate id
      $coupon->id = 'co_' . Str::random(17);
      // No Stripe Coupon exists, create
      \Stripe\Coupon::create($coupon->toStripe());
      return $coupon;
    }
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
    // Update Stripe if name, code, or path are dirty
    if ($coupon->isDirty(['name', 'code', 'path'])) {
      \Stripe\Coupon::update($coupon->id, [
        'name' => $coupon->name,
        'metadata' => [
          // Pass an empty string rather than null to unset
          // See: https://stripe.com/docs/api/coupons/create#create_coupon-metadata
          'code' => $coupon->code ?? '',
          'path' => $coupon->path ?? ''
        ]
      ]);
    }

    return $coupon;
  }
}
