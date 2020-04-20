<?php

namespace CreatyDev\Solarix\Cashier;

use CreatyDev\Domain\Subscriptions\Models\Plan;
use CreatyDev\Domain\Users\Models\User;
use Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Carbon;
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
 * @property Carbon|null          $trial_ends_at
 * @property Carbon|null          $ends_at
 * @property Carbon|null          $created_at
 * @property Carbon|null          $updated_at
 * @property int|null                                 $plan_id
 * @property-read User $owner
 * @property-read User $user
 * @method static Builder|CashierSubscription active()
 * @method static Builder|CashierSubscription cancelled()
 * @method static Builder|CashierSubscription ended()
 * @method static Builder|Subscription newModelQuery()
 * @method static Builder|Subscription newQuery()
 * @method static Builder|CashierSubscription notCancelled()
 * @method static Builder|CashierSubscription notOnGracePeriod()
 * @method static Builder|CashierSubscription notOnTrial()
 * @method static Builder|CashierSubscription onGracePeriod()
 * @method static Builder|CashierSubscription onTrial()
 * @method static Builder|Subscription query()
 * @method static Builder|CashierSubscription recurring()
 * @method static Builder|Subscription valid()
 * @method static Builder|Subscription whereCreatedAt($value)
 * @method static Builder|Subscription whereEndsAt($value)
 * @method static Builder|Subscription whereId($value)
 * @method static Builder|Subscription whereName($value)
 * @method static Builder|Subscription wherePlanId($value)
 * @method static Builder|Subscription whereQuantity($value)
 * @method static Builder|Subscription whereStripeId($value)
 * @method static Builder|Subscription whereStripePlan($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Solarix\Cashier\Subscription
 *         whereStripeStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Solarix\Cashier\Subscription
 *         whereTrialEndsAt($value)
 * @method static Builder|Subscription whereUpdatedAt($value)
 * @method static Builder|Subscription whereUserId($value)
 * @mixin Eloquent
 * @method static Builder|CashierSubscription incomplete()
 * @method static Builder|CashierSubscription pastDue()
 * @property string $stripe_plan
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
   * @param Builder $query
   * @return void
   */
  public function scopeValid($query) {
    // TODO: Add logic
    //    $query->whereNull('ends_at')->orWhere(function ($query) {
    //      $query->onGracePeriod();
    //    });
  }

  /**
   * Get Statement associated with this Site.
   *
   * @return BelongsTo
   */
  public function plan() {
    return $this->belongsTo(Plan::class);
  }

  /**
   * Swap the subscription to a new Stripe plan.
   *
   * @param  string  $plan
   * @param  array  $options
   *
   * @return CashierSubscription
   *
   * @throws SubscriptionUpdateFailure
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
