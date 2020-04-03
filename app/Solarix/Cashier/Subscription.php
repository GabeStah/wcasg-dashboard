<?php

namespace CreatyDev\Solarix\Cashier;

use Laravel\Cashier\Exceptions\SubscriptionUpdateFailure;
use Laravel\Cashier\Subscription as CashierSubscription;

/**
 * CreatyDev\Solarix\Cashier\Subscription
 *
 * @property int                                      $id
 * @property int                                      $user_id
 * @property string                                   $name
 * @property string                                   $stripe_id
 * @property string                                   $stripe_status
 * @property string                                   $stripe_plan_id
 * @property int                                      $quantity
 * @property \Illuminate\Support\Carbon|null          $trial_ends_at
 * @property \Illuminate\Support\Carbon|null          $ends_at
 * @property \Illuminate\Support\Carbon|null          $created_at
 * @property \Illuminate\Support\Carbon|null          $updated_at
 * @property int|null                                 $plan_id
 * @property-read \CreatyDev\Domain\Users\Models\User $owner
 * @property-read \CreatyDev\Domain\Users\Models\User $user
 * @method static \Illuminate\Database\Eloquent\Builder|\Laravel\Cashier\Subscription active()
 * @method static \Illuminate\Database\Eloquent\Builder|\Laravel\Cashier\Subscription cancelled()
 * @method static \Illuminate\Database\Eloquent\Builder|\Laravel\Cashier\Subscription ended()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Solarix\Cashier\Subscription newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Solarix\Cashier\Subscription newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\Laravel\Cashier\Subscription notCancelled()
 * @method static \Illuminate\Database\Eloquent\Builder|\Laravel\Cashier\Subscription notOnGracePeriod()
 * @method static \Illuminate\Database\Eloquent\Builder|\Laravel\Cashier\Subscription notOnTrial()
 * @method static \Illuminate\Database\Eloquent\Builder|\Laravel\Cashier\Subscription onGracePeriod()
 * @method static \Illuminate\Database\Eloquent\Builder|\Laravel\Cashier\Subscription onTrial()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Solarix\Cashier\Subscription query()
 * @method static \Illuminate\Database\Eloquent\Builder|\Laravel\Cashier\Subscription recurring()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Solarix\Cashier\Subscription valid()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Solarix\Cashier\Subscription whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Solarix\Cashier\Subscription whereEndsAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Solarix\Cashier\Subscription whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Solarix\Cashier\Subscription whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Solarix\Cashier\Subscription wherePlanId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Solarix\Cashier\Subscription whereQuantity($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Solarix\Cashier\Subscription whereStripeId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Solarix\Cashier\Subscription whereStripePlan($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Solarix\Cashier\Subscription
 *         whereStripeStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Solarix\Cashier\Subscription
 *         whereTrialEndsAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Solarix\Cashier\Subscription whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Solarix\Cashier\Subscription whereUserId($value)
 * @mixin \Eloquent
 * @method static \Illuminate\Database\Eloquent\Builder|\Laravel\Cashier\Subscription incomplete()
 * @method static \Illuminate\Database\Eloquent\Builder|\Laravel\Cashier\Subscription pastDue()
 */
class Subscription extends CashierSubscription {
  public $incrementing = false;
  public $keyType = 'string';
  /**
   * Enforce table name.
   */
  protected $table = 'subscriptions';

  /**
   * Filter query by active.
   *
   * @param \Illuminate\Database\Eloquent\Builder $query
   * @return void
   */
  public function scopeValid($query) {
    // TODO: Add logic
    //    $query->whereNull('ends_at')->orWhere(function ($query) {
    //      $query->onGracePeriod();
    //    });
  }

  /**
   * Swap the subscription to a new Stripe plan.
   *
   * @param  string  $plan
   * @param  array  $options
   *
   * @return \Laravel\Cashier\Subscription
   *
   * @throws \Laravel\Cashier\Exceptions\SubscriptionUpdateFailure
   */
  public function swap($plan, $options = []) {
    if ($this->incomplete()) {
      throw SubscriptionUpdateFailure::incompleteSubscription($this);
    }

    $subscription = $this->asStripeSubscription();

    $subscription->plan = $plan;

    $subscription->prorate = $this->prorate;

    $subscription->cancel_at_period_end = false;

    if (!is_null($this->billingCycleAnchor)) {
      $subscription->billing_cycle_anchor = $this->billingCycleAnchor;
    }

    foreach ($options as $key => $option) {
      $subscription->$key = $option;
    }

    // If no specific trial end date has been set, the default behavior should be
    // to maintain the current trial state, whether that is "active" or to run
    // the swap out with the exact number of days left on this current plan.
    if ($this->onTrial()) {
      $subscription->trial_end = $this->trial_ends_at->getTimestamp();
    } else {
      $subscription->trial_end = 'now';
    }

    // Again, if no explicit quantity was set, the default behaviors should be to
    // maintain the current quantity onto the new plan. This is a sensible one
    // that should be the expected behavior for most developers with Stripe.
    if ($this->quantity) {
      $subscription->quantity = $this->quantity;
    }

    $subscription->save();

    $this->fill([
      'plan_id' => $plan,
      'stripe_plan' => $plan,
      'ends_at' => null
    ])->save();

    return $this;
  }
}
