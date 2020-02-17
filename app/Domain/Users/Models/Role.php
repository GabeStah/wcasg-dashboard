<?php

namespace CreatyDev\Domain\Users\Models;

use CreatyDev\App\Traits\Eloquent\Ordering\OrderableTrait;
use CreatyDev\App\Traits\Eloquent\Ordering\PivotOrderableTrait;
use CreatyDev\Domain\Users\Filters\Roles\RoleFilters;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Kalnoy\Nestedset\NodeTrait;

/**
 * CreatyDev\Domain\Users\Models\Role
 *
 * @property int $id
 * @property string $name
 * @property string $slug
 * @property string|null $details
 * @property int $_lft
 * @property int $_rgt
 * @property int|null $parent_id
 * @property int $usable
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Kalnoy\Nestedset\Collection|\CreatyDev\Domain\Users\Models\Role[] $children
 * @property-read int|null $children_count
 * @property-read \CreatyDev\Domain\Users\Models\Role|null $parent
 * @property-read \Illuminate\Database\Eloquent\Collection|\CreatyDev\Domain\Users\Models\Permission[] $permissions
 * @property-read int|null $permissions_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\CreatyDev\Domain\Users\Models\User[] $users
 * @property-read int|null $users_count
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\Role d()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\Role filter($request, $filters = [])
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\Role latestDelete()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\Role latestFirst()
 * @method static \Kalnoy\Nestedset\QueryBuilder|\CreatyDev\Domain\Users\Models\Role newModelQuery()
 * @method static \Kalnoy\Nestedset\QueryBuilder|\CreatyDev\Domain\Users\Models\Role newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\Role orderByPivot($column = 'created_at', $order = 'desc')
 * @method static \Kalnoy\Nestedset\QueryBuilder|\CreatyDev\Domain\Users\Models\Role query()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\Role whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\Role whereDetails($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\Role whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\Role whereLft($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\Role whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\Role whereParentId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\Role whereRgt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\Role whereSlug($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\Role whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\Role whereUsable($value)
 * @mixin \Eloquent
 */
class Role extends Model {
  use NodeTrait, OrderableTrait, PivotOrderableTrait;

  protected $fillable = ['name', 'slug', 'details', 'usable'];

  /**
   * The attributes that should be mutated to dates.
   *
   * @var array
   */
  protected $dates = ['expires_at'];

  /**
   * Get the route key for the model.
   *
   * @return string
   */
  public function getRouteKeyName() {
    return 'slug';
  }

  /**
   * Filters the result.
   *
   * @param Builder $builder
   * @param $request
   * @param array $filters
   *
   * @return Builder
   */
  public function scopeFilter(Builder $builder, $request, array $filters = []) {
    return (new RoleFilters($request))->add($filters)->filter($builder);
  }

  /**
   * The users that belong to the role.
   */
  public function users() {
    return $this->belongsToMany(User::class, 'user_roles')
      ->using(UserRole::class)
      ->withTimestamps()
      ->withPivot(['expires_at']);
  }

  /**
   * The permissions that belong to the role.
   *
   * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
   */
  public function permissions() {
    return $this->belongsToMany(
      Permission::class,
      'role_permissions'
    )->withTimestamps();
  }
}
