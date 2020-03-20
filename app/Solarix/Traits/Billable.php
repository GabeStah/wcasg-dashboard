<?php

namespace CreatyDev\Solarix\Traits;

use Illuminate\Database\Eloquent\Relations\HasMany;
use Laravel\Cashier\Billable as CashierBillable;
use CreatyDev\Solarix\Cashier\Subscription;
use CreatyDev\Solarix\Cashier\SubscriptionBuilder;
use Stripe\Customer as StripeCustomer;

trait Billable {
  use CashierBillable;

  /**
   * Create a Stripe customer for the given model.
   *
   * @param  array  $options
   * @return StripeCustomer
   */
  public function createAsStripeCustomer(array $options = []) {
    $options = array_key_exists('email', $options)
      ? $options
      : array_merge($options, ['email' => $this->email]);

    // Merge with customer options.
    $options = array_merge($this->customerOptions(), $options);

    // Here we will create the customer instance on Stripe and store the ID of the
    // user from Stripe. This ID will correspond with the Stripe user instances
    // and allow us to retrieve users from Stripe later when we need to work.
    $customer = StripeCustomer::create($options, $this->stripeOptions());

    $this->stripe_id = $customer->id;

    $this->save();

    return $customer;
  }

  /**
   * Get User-specific options for Stripe Customer API.
   *
   * @return array
   */
  public function customerOptions() {
    return [
      'address' => [
        'line1' => $this->address1,
        'line2' => $this->address2,
        'country' => $this->country,
        'city' => $this->city,
        'postal_code' => $this->postal_code,
        'state' => $this->state
      ],
      'email' => $this->email,
      'name' => $this->name,
      'phone' => $this->phone,
      'metadata' => [
        'username' => $this->username,
        'company_name' => $this->company_name
      ]
    ];
  }

  /**
   * Begin creating a new subscription.
   *
   * @param string $subscription
   * @param string $plan
   * @return SubscriptionBuilder
   */
  public function newSubscription($subscription, $plan) {
    return new SubscriptionBuilder($this, $subscription, $plan);
  }

  /**
   * Determines if has a subscription.
   *
   * @return bool
   */
  public function isSubscribed(): bool {
    $count = $this->hasMany(Subscription::class, $this->getForeignKey())
      ->valid()
      ->count();

    return $count >= 1;
  }

  /**
   * Determine if the Stripe model has a given subscription.
   *
   * @param string $subscription
   * @param string|null $plan
   * @return bool
   */
  public function subscribed($subscription = 'default', $plan = null) {
    $subscription = $this->subscription($subscription);

    if (is_null($subscription)) {
      return false;
    }

    if (is_null($plan)) {
      return $subscription->valid();
    }

    return $subscription->valid() && $subscription->plan_id === $plan;
  }

  /**
   * Get a subscription instance by name.
   *
   * @param string $subscription
   * @return Subscription|null
   */
  public function subscription($subscription = 'default') {
    return $this->subscriptions
      ->sortByDesc(function ($value) {
        return $value->created_at->getTimestamp();
      })
      ->first(function ($value) use ($subscription) {
        return $value->name === $subscription;
      });
  }

  /**
   * Get all of the subscriptions for the Stripe model.
   *
   * @return HasMany
   */
  public function subscriptions() {
    return $this->hasMany(Subscription::class, $this->getForeignKey())->orderBy(
      'created_at',
      'desc'
    );
  }

  public function validSubscription() {
    return $this->hasMany(Subscription::class, $this->getForeignKey())
      ->valid()
      ->first();
  }
}
