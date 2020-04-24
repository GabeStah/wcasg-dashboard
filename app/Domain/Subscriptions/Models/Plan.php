<?php

namespace CreatyDev\Domain\Subscriptions\Models;

use CreatyDev\Domain\Coupon\Models\Coupon;
use CreatyDev\Domain\Users\Models\User;
use Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Carbon;
use Stripe\Product;

/**
 * CreatyDev\Domain\Subscriptions\Models\Plan
 *
 * @property string $id
 * @property string $name
 * @property string $slug
 * @property string $interval
 * @property float $price
 * @property int $active
 * @property int $teams_enabled
 * @property int|null $teams_limit
 * @property int|null $trial_period_days
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @method static Builder|Plan active()
 * @method static Builder|Plan except($planId)
 * @method static Builder|Plan findSimilarSlugs($attribute, $config, $slug)
 * @method static Builder|Plan forTeams()
 * @method static Builder|Plan forUsers()
 * @method static Builder|Plan newModelQuery()
 * @method static Builder|Plan newQuery()
 * @method static Builder|Plan query()
 * @method static Builder|Plan whereActive($value)
 * @method static Builder|Plan whereCreatedAt($value)
 * @method static Builder|Plan whereGatewayId($value)
 * @method static Builder|Plan whereId($value)
 * @method static Builder|Plan whereInterval($value)
 * @method static Builder|Plan whereName($value)
 * @method static Builder|Plan wherePrice($value)
 * @method static Builder|Plan whereSlug($value)
 * @method static Builder|Plan whereTeamsEnabled($value)
 * @method static Builder|Plan whereTeamsLimit($value)
 * @method static Builder|Plan whereTrialPeriodDays($value)
 * @method static Builder|Plan whereUpdatedAt($value)
 * @mixin Eloquent
 * @property string $product_id
 * @property int $amount
 * @property string $currency
 * @property string $nickname
 * @method static Builder|Plan whereAmount($value)
 * @method static Builder|Plan whereCurrency($value)
 * @method static Builder|Plan whereNickname($value)
 * @method static Builder|Plan whereProductId($value)
 * @property array|null $context
 * @method static Builder|Plan whereContext($value)
 */
class Plan extends Model {
  /**
   * Default values.
   *
   * @var array
   */
  public $attributes = [
    'active' => true,
    'currency' => 'usd',
    'interval' => 'month'
  ];

  /**
   * Type cast attributes.
   *
   * @var array
   */
  public $casts = [
    'active' => 'boolean',
    'context' => 'json',
    'teams_enabled' => 'boolean'
  ];

  protected $fillable = [
    'id',
    'coupon_id',
    'product_id',
    'amount',
    'currency',
    'interval',
    'nickname',
    'active',
    'teams_enabled',
    'teams_limit',
    'trial_period_days',
    'context'
  ];

  /**
   * Indicates if the IDs are auto-incrementing.
   *
   * @var bool
   */
  public $incrementing = false;

  /**
   * The "type" of the primary ID.
   *
   * @var string
   */
  protected $keyType = 'string';

  /**
   * Gets base price before any applicable discount.
   *
   * @return string
   * @throws \Exception
   */
  public function basePrice() {
    return cents_to_decimal($this->amount);
  }

  /**
   * Get the associated Coupon.
   *
   * @return BelongsTo
   */
  public function coupon() {
    return $this->belongsTo(Coupon::class);
  }

  /**
   * Get the maximum number of Sites allowed by context.
   *
   * @return int
   */
  public function getSiteCountMaximum() {
    $maximum = 100;
    $context = $this->context;
    // No context
    if (!$context) {
      return $maximum;
    }

    $context = json_decode(json_encode($context));

    // Check restraint value against desired value
    foreach ($context->plan->restraints as $restraint) {
      switch ($restraint->comparator) {
        case '<':
          if ($maximum >= $restraint->value) {
            $maximum = $restraint->value - 1;
          }
        case '<=':
          if ($maximum > $restraint->value) {
            $maximum = $restraint->value;
          }
        case '=':
          if ($maximum > $restraint->value) {
            $maximum = $restraint->value;
          }
      }
    }

    return $maximum;
  }

  /**
   * Get amount of discount.
   *
   * @return string
   * @throws \Exception
   */
  public function discount() {
    if ($this->isDiscounted()) {
      return cents_to_decimal($this->amount * $this->coupon->percent());
    } else {
      // No discount.
      return cents_to_decimal(0);
    }
  }

  /**
   * Checks if passed data is validated by context object.
   *
   * e.g.: Checks if adding 1 site for $user is validated:
   * <code>
   * $plan->isContextValidated('site', 1, $user)
   * </code>
   *
   * @param String $entity Key representing type of entity to validate.
   * @param Integer $change Proposed change to entity.
   * @param User $user Object on which to perform entity validation.
   * @return bool Result of validation.
   */
  public function isContextValidated($entity, $change, User $user) {
    $context = $this->context;
    // No context
    if (!$context) {
      return true;
    }

    $context = json_decode(json_encode($context));

    // No restraints
    if (!$context->plan || !$context->plan->restraints) {
      return true;
    }

    $results = [];

    if ($entity === 'site') {
      $sites = $user->sites->where('active', '=', true);
      $current = $sites->count();
      $desired = $current + $change;

      // Check restraint value against desired value
      foreach ($context->plan->restraints as $restraint) {
        switch ($restraint->comparator) {
          case '<':
            array_push($results, $desired < $restraint->value);
            break;
          case '<=':
            array_push($results, $desired <= $restraint->value);
            break;
          case '>':
            array_push($results, $desired > $restraint->value);
            break;
          case '>=':
            array_push($results, $desired >= $restraint->value);
            break;
          case '=':
            array_push($results, $desired = $restraint->value);
            break;
          default:
            // If invalid comparator, assume pass
            array_push($results, true);
        }
      }

      // All must pass
      foreach ($results as $result) {
        if ($result !== true) {
          return false;
        }
      }

      // All pass
      return true;
    }
  }

  /**
   * Determine if Plan is currently discounted.
   *
   * @return bool
   */
  public function isDiscounted() {
    if (isset($this->coupon)) {
      return $this->coupon->isValid();
    } else {
      return false;
    }
  }

  /**
   * Check if plan is for teams.
   *
   * @return bool
   */
  public function isForTeams() {
    return $this->teams_enabled;
  }

  /**
   * Check if plan is not for teams.
   *
   * @return bool
   */
  public function isNotForTeams() {
    return !$this->isForTeams();
  }

  /**
   * Gets actual price after any applicable discount.
   *
   * @return string
   * @throws \Exception
   */
  public function price() {
    if ($this->isDiscounted()) {
      return cents_to_decimal($this->amount * (1 - $this->coupon->percent()));
    } else {
      // No discount, base price.
      return cents_to_decimal($this->amount);
    }
  }

  /**
   * Get the Stripe Product associated with Plan.
   *
   * @return Product
   */
  public function product() {
    if ($this->product_id) {
      return Product::retrieve($this->product_id);
    }
  }

  /**
   * Get active plans.
   *
   * @param Builder $builder
   * @return mixed
   */
  public function scopeActive(Builder $builder) {
    return $builder->where('active', true);
  }

  /**
   * Get plans except passed.
   *
   * @param Builder $builder
   * @param $planId
   * @return mixed
   */
  public function scopeExcept(Builder $builder, $planId) {
    return $builder->where('id', '!=', $planId);
  }

  /**
   * Get plans for users.
   *
   * @param Builder $builder
   * @return mixed
   */
  public function scopeForUsers(Builder $builder) {
    return $builder->where('teams_enabled', false);
  }

  /**
   * Get plans for teams.
   *
   * @param Builder $builder
   * @return mixed
   */
  public function scopeForTeams(Builder $builder) {
    return $builder->where('teams_enabled', true);
  }
}
