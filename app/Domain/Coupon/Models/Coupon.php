<?php

namespace CreatyDev\Domain\Coupon\Models;

use CreatyDev\Domain\Subscriptions\Models\Plan;
use CreatyDev\Domain\Users\Models\User;
use Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Carbon;

/**
 * CreatyDev\Domain\Coupon\Models\Coupon
 *
 * @property int $id
 * @property string $name
 * @property string $stripe_plan_id
 * @property float $percent_off
 * @property string $duration
 * @property int|null $duration_in_months
 * @property string|null $currency
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @method static Builder|Coupon newModelQuery()
 * @method static Builder|Coupon newQuery()
 * @method static Builder|Coupon query()
 * @method static Builder|Coupon whereCreatedAt($value)
 * @method static Builder|Coupon whereCurrency($value)
 * @method static Builder|Coupon whereDuration($value)
 * @method static Builder|Coupon whereDurationInMonths($value)
 * @method static Builder|Coupon whereGatewayId($value)
 * @method static Builder|Coupon whereId($value)
 * @method static Builder|Coupon whereName($value)
 * @method static Builder|Coupon wherePercentOff($value)
 * @method static Builder|Coupon whereUpdatedAt($value)
 * @mixin Eloquent
 * @property string $plan_id
 * @method static Builder|Coupon wherePlanId($value)
 * @property int|null $max_redemptions Maximum number of times this coupon can be redeemed, in total, across all customers, before it is no longer valid.
 * @property array|null $metadata
 * @property int|null $redeem_by Date after which coupon can no longer be redeemed.
 * @property bool $valid Taking account of the above properties, whether this coupon can still be applied to a customer
 * @property-read \Illuminate\Database\Eloquent\Collection|\CreatyDev\Domain\Subscriptions\Models\Plan[] $plans
 * @property-read int|null $plans_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\CreatyDev\Domain\Users\Models\User[] $users
 * @property-read int|null $users_count
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Coupon\Models\Coupon whereMaxRedemptions($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Coupon\Models\Coupon whereMetadata($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Coupon\Models\Coupon whereRedeemBy($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Coupon\Models\Coupon whereValid($value)
 * @property string $code Unique coupon code entered by user to apply discount.
 * @property string|null $path
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Coupon\Models\Coupon whereCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Coupon\Models\Coupon wherePath($value)
 */
class Coupon extends Model {
  protected $casts = [
    'metadata' => 'json',
    'percent_off' => 'double',
    'redeem_by' => 'timestamp',
    'valid' => 'boolean'
  ];
  protected $fillable = [
    'id',
    'code',
    'currency',
    'duration',
    'duration_in_months',
    'max_redemptions',
    'metadata',
    'name',
    'percent_off',
    'path',
    'redeem_by',
    'valid'
  ];
  protected $keyType = 'string';
  protected $primaryKey = 'id';
  public $incrementing = false;
  public $stripe_coupon = null;

  /**
   * Determine if coupon has been used by User.
   *
   * @param User $user
   * @return bool
   */
  public function wasUsedByUser(User $user) {
    return $user->coupons->contains('id', '=', $this->id);
  }

  /**
   * Checks if cached Stripe coupon is valid.
   *
   * @return bool
   */
  public function isValid() {
    if (!$this->stripe_coupon || $this->stripe_coupon->id !== $this->id) {
      $this->stripe_coupon = \Stripe\Coupon::retrieve($this->id);
    }
    if ($this->stripe_coupon) {
      return $this->stripe_coupon->valid;
    } else {
      return false;
    }
  }

  /**
   * Get percent off as proportion.
   *
   * @return float|int
   */
  public function percent() {
    return $this->percent_off / 100;
  }

  /**
   * Get the associated Plans.
   *
   * @return HasMany
   */
  public function plans() {
    return $this->hasMany(Plan::class);
  }

  /**
   * Get Coupon representation as human-readable string.
   * @param string $interval
   * @return string
   */
  public function toString($interval = 'Month') {
    switch ($this->duration) {
      case 'forever':
        return "$this->percent_off% Off, Forever";
        break;
      case 'repeating':
        return "$this->percent_off% Off, First $this->duration_in_months Months";
        break;
      case 'once':
      default:
        return "$this->percent_off% Off, First $interval";
        break;
    }
  }

  /**
   * Convert to valid Stripe object for create/update.
   *
   * @param bool $creating
   * @return array
   */
  public function toStripe($creating = false) {
    $data = $this->toArray();
    $data['metadata'] = [
      'code' => $this->code,
      'path' => $this->path
    ];
    unset($data['code']);
    unset($data['created_at']);
    unset($data['path']);
    unset($data['updated_at']);
    unset($data['valid']);
    return $data;
  }

  /**
   * Get Users associated with Coupon.
   *
   * @return BelongsToMany
   */
  public function users() {
    return $this->belongsToMany(User::class, 'coupon_user');
  }
}
