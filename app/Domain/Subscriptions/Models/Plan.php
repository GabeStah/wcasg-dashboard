<?php

namespace CreatyDev\Domain\Subscriptions\Models;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

/**
 * CreatyDev\Domain\Subscriptions\Models\Plan
 *
 * @property int $id
 * @property string $name
 * @property string $slug
 * @property string $gateway_id
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
 */
class Plan extends Model {
  use Sluggable;

  protected $fillable = [
    'name',
    'slug',
    'gateway_id',
    'price',
    'active',
    'teams_enabled',
    'teams_limit',
    'trial_period_days',
    'interval'
  ];

  /**
   * Return the sluggable configuration array for this model.
   *
   * @return array
   */
  public function sluggable() {
    return [
      'slug' => [
        'source' => 'name'
      ]
    ];
  }

  /**
   * Get the route key for the model.
   *
   * @return string
   */
  public function getRouteKeyName() {
    return 'slug';
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
