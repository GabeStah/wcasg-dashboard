<?php

namespace CreatyDev\Solarix\Cashier;

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
}
