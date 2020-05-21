<?php

namespace CreatyDev\App\Http\Livewire\Checkout\Payment;

use CreatyDev\Domain\Coupon\Models\Coupon;
use CreatyDev\Domain\Subscriptions\Models\Plan;
use CreatyDev\Domain\Users\Models\User;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\Translation\Translator;
use Livewire\Component;

class Cart extends Component {
  public $coupon;
  public $coupon_code;
  public $coupon_is_valid = false;
  public $plan;
  public $user;

  /**
   * Get coupon status message.
   *
   * @return array|Application|Translator|string|null
   */
  public function getCouponstatusProperty() {
    // No code, use default
    if (!$this->coupon_code) {
      return __('controller.checkout.payment.coupon.status.default');
    }
    // No coupon, invalid
    if (!$this->coupon) {
      return __('controller.checkout.payment.coupon.status.invalid');
    }
    // Not valid in Stripe
    if (!$this->coupon->isValid()) {
      return __('controller.checkout.payment.coupon.status.invalid');
    }
    // Already used by user
    if ($this->coupon->wasUsedByUser($this->user)) {
      return __('controller.checkout.payment.coupon.status.used');
    }
    // Valid and applied
    return __('controller.checkout.payment.coupon.status.applied');
  }

  /**
   * Get the text color based on coupon status.
   *
   * @return string
   */
  public function getCoupontextcolorProperty() {
    return $this->coupon_code
      ? ($this->isCouponValid()
        ? 'text-success'
        : 'text-danger')
      : 'text-muted';
  }

  /**
   * Get the current total discount.
   *
   * @return mixed
   */
  public function getDiscountProperty() {
    if ($this->isCouponValid()) {
      return $this->plan->discount($this->coupon);
    }
    return $this->plan->discount();
  }

  /**
   * Get the current total price.
   *
   * @param bool $convertToDecimal
   * @return mixed
   */
  public function getPriceProperty($convertToDecimal = true) {
    if ($this->isCouponValid()) {
      return $this->plan->price($this->coupon, $convertToDecimal);
    }
    return $this->plan->price();
  }

  /**
   * Determine if coupon is valid.
   * Check existence of coupon, Stripe validity, and ensure not used by User.
   *
   * @return bool
   */
  public function isCouponValid() {
    if (
      !$this->coupon ||
      !$this->coupon->isValid() ||
      $this->coupon->wasUsedByUser($this->user)
    ) {
      return false;
    }
    return true;
  }

  /**
   * Reset coupon-related state.
   */
  private function resetCouponState() {
    $this->coupon = null;
    $this->coupon_status = null;
    $this->coupon_is_valid = false;
  }

  /**
   * Fires after Coupon Code updated.
   *
   * @param $value
   */
  public function updatedCouponCode($value) {
    // Reset state
    $this->resetCouponState();
    // Update coupon
    $this->coupon = Coupon::where('code', $value)->first();
    // Emit
    $this->emit('totalChanged', $this->getPriceProperty());
  }

  /**
   * Fires when component initially mounted.
   *
   * @param $coupon_code
   * @param Plan $plan
   * @param User $user
   */
  public function mount($coupon_code, Plan $plan, User $user) {
    $this->coupon_code = $coupon_code;
    $this->plan = $plan;
    $this->user = $user;
    $this->updatedCouponCode($this->coupon_code);
  }

  public function render() {
    return view('livewire.checkout.payment.cart');
  }
}
