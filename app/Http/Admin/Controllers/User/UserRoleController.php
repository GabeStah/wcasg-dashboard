<?php

namespace CreatyDev\Http\Admin\Controllers\User;

use CreatyDev\App\Controllers\Controller;
use CreatyDev\Domain\Users\Models\Role;
use CreatyDev\Domain\Users\Models\User;
use Illuminate\Http\Request;

class UserRoleController extends Controller {
  /**
   * Display a listing of the resource.
   *
   * @param  \CreatyDev\Domain\Users\Models\User $user
   * @return \Illuminate\Http\Response
   * @throws \Illuminate\Auth\Access\AuthorizationException
   */
  public function index(User $user) {
    $this->authorize('touch', User::class);

    $roles = $user
      ->roles()
      ->orderByPivot('created_at')
      ->orderByPivot('expires_at')
      ->get();

    return view('admin.users.user.roles.index', compact('user', 'roles'));
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request $request
   * @param  \CreatyDev\Domain\Users\Models\User $user
   * @return \Illuminate\Http\RedirectResponse|\Illuminate\Http\Response
   * @throws \Illuminate\Auth\Access\AuthorizationException
   */
  public function store(Request $request, User $user) {
    $this->authorize('touch', User::class);

    $request->validate([
      'expires_at' => 'nullable|date'
    ]);

    $expires = null;

    $role = Role::where('id', $request->role)->first();

    $assigned = $user->assignRole($role, $request->expires_at);

    if ($assigned) {
      return back()->withSuccess(
        "{$user->name} has been assigned {$role->name} role."
      );
    }

    return back()->with(
      'error',
      "Failed to assign {$role->name} role to user."
    );
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request $request
   * @param  \CreatyDev\Domain\Users\Models\User $user
   * @param  \CreatyDev\Domain\Users\Models\Role $role
   * @return \Illuminate\Http\Response
   * @throws \Illuminate\Auth\Access\AuthorizationException
   */
  public function update(Request $request, User $user, Role $role) {
    $this->authorize('touch', User::class);

    $request->validate([
      'expires_at' => 'nullable|date'
    ]);

    $updated = $user->updateRole($role, $request->expires_at);

    if ($updated) {
      return back()->withSuccess("{$user->name}'s {$role->name} role updated.");
    }

    return back()->withError("Failed updating user's {$role->name} role.");
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \CreatyDev\Domain\Users\Models\User $user
   * @param  \CreatyDev\Domain\Users\Models\Role $role
   * @return \Illuminate\Http\Response
   * @throws \Illuminate\Auth\Access\AuthorizationException
   */
  public function destroy(User $user, Role $role) {
    $this->authorize('delete', User::class);

    // Delete pivot table record
    $updated = $user->roles()->detach($role->id);

    if ($updated) {
      return back()->withSuccess("{$user->name}'s {$role->name} role revoked.");
    }

    return back()->withError(
      "{$user->name} does not have an active {$role->name} role."
    );
  }
}
