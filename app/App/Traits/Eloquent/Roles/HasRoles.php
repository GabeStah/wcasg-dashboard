<?php
/**
 * Created by PhpStorm.
 * User: CreatyDev
 * Date: 1/8/2018
 * Time: 10:12 AM
 */

namespace CreatyDev\App\Traits\Eloquent\Roles;

use Carbon\Carbon;
use CreatyDev\Domain\Users\Models\Role;
use CreatyDev\Domain\Users\Models\UserRole;

trait HasRoles {
  /**
   * Assign user a role by id.
   *
   * @param $roleId
   * @param null $expiresAt
   */
  public function assignRoleById($roleId, $expiresAt = null) {
    $role = Role::where('id', $roleId)->first();

    $this->assignRole($role, $expiresAt);
  }

  /**
   * Assign user a role.
   * Returns true if role added.
   *
   * @param Role $role
   * @param null $expiresAt
   * @return bool
   */
  public function assignRole(Role $role, $expiresAt = null) {
    if (!$this->hasRole($role->slug)) {
      if (isset($expiresAt)) {
        $expiresAt = Carbon::parse($expiresAt)->toDateTimeString();
      }

      $this->roles()->attach($role->id, ['expires_at' => $expiresAt]);

      return true;
    }

    return false;
  }

  /**
   * Update user's role by id.
   *
   * @param $roleId
   * @param null $expiresAt
   */
  public function updateRoleById($roleId, $expiresAt = null) {
    $role = Role::where('id', $roleId)->first();

    $this->updateRole($role, $expiresAt);
  }

  /**
   * Update user's role.
   *
   * @param Role $role
   * @param null $expiresAt
   * @return bool
   */
  public function updateRole(Role $role, $expiresAt = null) {
    if ($this->hasRole($role->slug)) {
      if (isset($expiresAt)) {
        $expiresAt = Carbon::parse($expiresAt)->toDateTimeString();
      }

      $this->roles()->updateExistingPivot($role->id, [
        'expires_at' => $expiresAt
      ]);

      return true;
    }

    return false;
  }

  /**
   * Check if given model has role.
   *
   * if they do not have given role or its child
   * then return false
   *
   * Uses nested sets for parent/child relationships.
   * @see https://github.com/lazychaser/laravel-nestedset
   *
   * @param $roles
   * @return bool
   */
  public function hasRole(...$roles) {
    $userRoles = $this->roles();

    // User has no roles
    if (!$userRoles) {
      return false;
    }

    // Get passed role with children
    $roles = Role::with('children')
      ->whereIn('slug', $roles)
      ->get();

    if (!$roles) {
      // Short circuit due to assumed invalid role.
      return false;
    }

    // Iterate each role
    foreach ($roles as $role) {
      // Fetch child roles as string array
      $children = $role->children->pluck('slug')->push($role->slug);

      // Check if User roles' slug is found within child roles array
      if (!!$userRoles->whereIn('slug', $children)->count()) {
        return true;
      }
    }

    // No role check succeeded, so implicitly fail.
    return false;
  }

  /**
   * Get the roles that belong to the model.
   */
  public function roles() {
    return $this->belongsToMany(Role::class, 'user_roles')
      ->using(UserRole::class)
      ->as('roleable')
      ->withTimestamps()
      ->withPivot(['expires_at']);
  }
}
