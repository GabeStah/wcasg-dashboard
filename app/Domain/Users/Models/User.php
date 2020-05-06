<?php

namespace CreatyDev\Domain\Users\Models;

use CreatyDev\App\Traits\Eloquent\Auth\HasConfirmationToken;
use CreatyDev\App\Traits\Eloquent\Auth\HasTwoFactorAuthentication;
use CreatyDev\App\Traits\Eloquent\Roles\HasPermissions;
use CreatyDev\App\Traits\Eloquent\Roles\HasRoles;
use CreatyDev\App\Traits\Eloquent\Subscriptions\HasSubscriptions;
use CreatyDev\Domain\Company\Models\Company;
use CreatyDev\Domain\Coupon\Models\Coupon;
use CreatyDev\Domain\Leads\Models\Lead;
use CreatyDev\Domain\Sites\Models\Site;
use CreatyDev\Domain\Statements\Models\Statement;
use CreatyDev\Domain\Subscriptions\Models\Plan;
use CreatyDev\Domain\Teams\Models\Team;
use CreatyDev\Domain\Ticket\Models\Comment;
use CreatyDev\Domain\Ticket\Models\Ticket;
use CreatyDev\Domain\Users\Filters\UserFilters;
use CreatyDev\Solarix\Cashier\Subscription;
use CreatyDev\Solarix\Traits\Billable;
use Eloquent;
use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\DatabaseNotification;
use Illuminate\Notifications\DatabaseNotificationCollection;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Carbon;
use Illuminate\Support\Collection;
use Laravel\Passport\Client;
use Laravel\Passport\HasApiTokens;
use Laravel\Passport\Token;
use Staudenmeir\EloquentHasManyDeep\HasRelationships;

/**
 * CreatyDev\Domain\Users\Models\User
 *
 * @property int $id
 * @property string $first_name
 * @property string $last_name
 * @property string|null $username
 * @property string $profile_image
 * @property string $email
 * @property string|null $phone
 * @property string $password
 * @property int $activated
 * @property string|null $remember_token
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property string|null $stripe_id
 * @property string|null $card_brand
 * @property string|null $card_last_four
 * @property string|null $trial_ends_at
 * @property Carbon|null $deleted_at
 * @property string|null $company_name
 * @property string|null $address1
 * @property string|null $address2
 * @property string|null $city
 * @property string|null $state
 * @property string|null $country
 * @property string|null $postal_code
 * @property-read \Illuminate\Database\Eloquent\Collection|Client[] $clients
 * @property-read int|null $clients_count
 * @property-read \Illuminate\Database\Eloquent\Collection|Comment[] $comments
 * @property-read int|null $comments_count
 * @property-read \Illuminate\Database\Eloquent\Collection|Company[] $companies
 * @property-read int|null $companies_count
 * @property-read ConfirmationToken $confirmationToken
 * @property-read mixed $image
 * @property-read string $name
 * @property-read mixed $plan
 * @property-read mixed $statements
 * @property-read DatabaseNotificationCollection|DatabaseNotification[] $notifications
 * @property-read int|null $notifications_count
 * @property-read \Illuminate\Database\Eloquent\Collection|Permission[] $permissions
 * @property-read int|null $permissions_count
 * @property-read \Illuminate\Database\Eloquent\Collection|Plan[] $plans
 * @property-read int|null $plans_count
 * @property-read \Kalnoy\Nestedset\Collection|Role[] $roles
 * @property-read int|null $roles_count
 * @property-read \Illuminate\Database\Eloquent\Collection|Site[] $sites
 * @property-read int|null $sites_count
 * @property-read \Illuminate\Database\Eloquent\Collection|Subscription[] $subscriptions
 * @property-read int|null $subscriptions_count
 * @property-read Team $team
 * @property-read \Illuminate\Database\Eloquent\Collection|Team[] $teams
 * @property-read int|null $teams_count
 * @property-read \Illuminate\Database\Eloquent\Collection|Ticket[] $tickets
 * @property-read int|null $tickets_count
 * @property-read \Illuminate\Database\Eloquent\Collection|Token[] $tokens
 * @property-read int|null $tokens_count
 * @property-read TwoFactor $twoFactor
 * @method static Builder|User filter($request, $filters = [])
 * @method static bool|null forceDelete()
 * @method static Builder|User newModelQuery()
 * @method static Builder|User newQuery()
 * @method static \Illuminate\Database\Query\Builder|User onlyTrashed()
 * @method static Builder|User query()
 * @method static bool|null restore()
 * @method static Builder|User whereActivated($value)
 * @method static Builder|User whereAddress1($value)
 * @method static Builder|User whereAddress2($value)
 * @method static Builder|User whereCardBrand($value)
 * @method static Builder|User whereCardLastFour($value)
 * @method static Builder|User whereCity($value)
 * @method static Builder|User whereCompanyName($value)
 * @method static Builder|User whereCountry($value)
 * @method static Builder|User whereCreatedAt($value)
 * @method static Builder|User whereDeletedAt($value)
 * @method static Builder|User whereEmail($value)
 * @method static Builder|User whereFirstName($value)
 * @method static Builder|User whereId($value)
 * @method static Builder|User whereLastName($value)
 * @method static Builder|User wherePassword($value)
 * @method static Builder|User wherePhone($value)
 * @method static Builder|User wherePostalCode($value)
 * @method static Builder|User whereProfileImage($value)
 * @method static Builder|User whereRememberToken($value)
 * @method static Builder|User whereState($value)
 * @method static Builder|User whereStripeId($value)
 * @method static Builder|User whereTrialEndsAt($value)
 * @method static Builder|User whereUpdatedAt($value)
 * @method static Builder|User whereUsername($value)
 * @method static \Illuminate\Database\Query\Builder|User withTrashed()
 * @method static \Illuminate\Database\Query\Builder|User withoutTrashed()
 * @mixin Eloquent
 * @property-read \Illuminate\Database\Eloquent\Collection|\CreatyDev\Domain\Coupon\Models\Coupon[] $coupons
 * @property-read int|null $coupons_count
 * @property-read \CreatyDev\Domain\Leads\Models\Lead $lead
 */
class User extends Authenticatable {
  use Notifiable,
    CanResetPassword,
    HasConfirmationToken,
    HasRoles,
    HasPermissions,
    Billable,
    HasSubscriptions,
    SoftDeletes,
    HasTwoFactorAuthentication,
    HasApiTokens,
    HasRelationships;

  /**
   * The attributes that should be appended to the model.
   *
   * @var array
   */
  protected $appends = ['name'];

  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
    'first_name',
    'last_name',
    'username',
    'email',
    'phone',
    'password',
    'activated',
    'profile_image',
    'company_name',
    'address1',
    'address2',
    'city',
    'state',
    'country',
    'postal_code'
  ];

  /**
   * The attributes that should be hidden for arrays.
   *
   * @var array
   */
  protected $hidden = ['password', 'remember_token'];

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
    return (new UserFilters($request))->add($filters)->filter($builder);
  }

  /**
   * Get user's full name as attribute.
   *
   * @return string
   */
  public function getNameAttribute() {
    return $this->first_name . ' ' . $this->last_name;
  }

  /**
   * Check if user is activated.
   *
   * @return mixed
   */
  public function hasActivated() {
    return $this->activated;
  }

  /**
   * Check if user is not activated.
   *
   * @return bool
   */
  public function hasNotActivated() {
    return !$this->hasActivated();
  }

  /**
   * Check if user is admin.
   *
   * @return bool
   */
  public function isAdmin() {
    return $this->hasRole('admin');
  }

  /**
   * Check if user's team limit reached.
   *
   * @return bool
   */
  public function teamLimitReached() {
    return $this->team->users->count() === $this->plan->teams_limit;
  }

  /**
   * Check if current user matches passed user.
   *
   * @param User $user
   * @return bool
   */
  public function isTheSameAs(User $user) {
    return $this->id === $user->id;
  }

  /**
   * Get Coupons associated with User.
   *
   * @return BelongsToMany
   */
  public function coupons() {
    return $this->belongsToMany(Coupon::class, 'coupon_user');
  }

  /**
   * @return HasOne
   */
  public function lead() {
    return $this->hasOne(Lead::class);
  }

  /**
   * Get team owned by user.
   *
   * @return HasOne
   */
  public function team() {
    return $this->hasOne(Team::class);
  }

  /**
   * Get plan that the user is currently on.
   *
   * @return mixed
   */
  public function plan() {
    return $this->plans->first();
  }

  /**
   * Get user's plan as a property.
   *
   * @return mixed
   */
  public function getPlanAttribute() {
    return $this->plan();
  }

  /**
   * Get plans owned by the user.
   */
  public function plans() {
    return $this->hasManyThrough(
      Plan::class,
      Subscription::class,
      'user_id',
      'id',
      'id',
      'plan_id'
    )->orderBy('subscriptions.created_at', 'desc');
  }

  /**
   * Get sites owned by the user.
   */
  public function sites() {
    return $this->hasManyThrough(
      Site::class,
      Subscription::class,
      'user_id', // Foreign on Sub
      'subscription_id', // Foreign on Site
      'id', // local on this (User)
      'id' // local on Sub
    )->orderBy('sites.created_at', 'desc');
  }

  public function getStatementsAttribute() {
    return $this->statements();
  }

  /**
   * Get all Statements associated with User.
   *
   * @return Collection
   */
  public function statements() {
    return Statement::join('sites', 'statements.id', '=', 'sites.statement_id')
      ->join('subscriptions', 'sites.subscription_id', '=', 'subscriptions.id')
      ->join('users', 'subscriptions.user_id', '=', 'users.id')
      ->where('users.id', '=', $this->id)
      ->get();
  }

  /**
   * Get teams that user belongs to.
   */
  public function teams() {
    return $this->belongsToMany(Team::class, 'team_users');
  }

  /**
   * Get user's last accessed company.
   *
   * If using the new tenant switch functionality:
   * Append 'lastAccessedCompany' to model 'appends' property
   * And uncomment lines below
   *
   * @return mixed
   */
  // public function getLastAccessedCompanyAttribute()
  // {
  //    return $this->companies()->orderByDesc('last_login_at')->first();
  // }

  /**
   * Get companies that user belongs to.
   */
  public function companies() {
    return $this->belongsToMany(Company::class, 'company_users');
  }

  // user profile image
  public function getImageAttribute() {
    return asset('storage' . $this->profile_image);
  }

  public function comments() {
    return $this->hasMany(Comment::class);
  }

  public function tickets() {
    return $this->hasMany(Ticket::class);
  }
}
