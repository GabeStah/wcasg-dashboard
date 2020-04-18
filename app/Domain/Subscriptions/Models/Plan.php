<?php

namespace CreatyDev\Domain\Subscriptions\Models;

use CreatyDev\Domain\Users\Models\User;
use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

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
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Subscriptions\Models\Plan active()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Subscriptions\Models\Plan except($planId)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Subscriptions\Models\Plan findSimilarSlugs($attribute, $config, $slug)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Subscriptions\Models\Plan forTeams()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Subscriptions\Models\Plan forUsers()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Subscriptions\Models\Plan newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Subscriptions\Models\Plan newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Subscriptions\Models\Plan query()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Subscriptions\Models\Plan whereActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Subscriptions\Models\Plan whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Subscriptions\Models\Plan whereGatewayId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Subscriptions\Models\Plan whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Subscriptions\Models\Plan whereInterval($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Subscriptions\Models\Plan whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Subscriptions\Models\Plan wherePrice($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Subscriptions\Models\Plan whereSlug($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Subscriptions\Models\Plan whereTeamsEnabled($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Subscriptions\Models\Plan whereTeamsLimit($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Subscriptions\Models\Plan whereTrialPeriodDays($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Subscriptions\Models\Plan whereUpdatedAt($value)
 * @mixin \Eloquent
 * @property string $product_id
 * @property int $amount
 * @property string $currency
 * @property string $nickname
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Subscriptions\Models\Plan whereAmount($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Subscriptions\Models\Plan whereCurrency($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Subscriptions\Models\Plan whereNickname($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Subscriptions\Models\Plan whereProductId($value)
 * @property array|null $context
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Subscriptions\Models\Plan whereContext($value)
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
