<?php

namespace CreatyDev\Domain\Sites\Models;

use CreatyDev\App\Traits\Eloquent\HasToken;
use CreatyDev\Domain\Extensions\Models\Extension;
use CreatyDev\Domain\Statements\Models\Statement;
use CreatyDev\Domain\Users\Models\User;
use CreatyDev\Solarix\Cashier\Subscription;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * CreatyDev\Domain\Sites\Models\Site
 *
 * @property int                                                $id
 * @property string                                             $domain Root domain name + TLD.
 * @property bool                                               $active Set by 'User'.  If 'true', allow incoming WidgetException
 *           requests to succeed, else fail.
 * @property string                                             $token  Unique identifier to be used in API requests.
 * @property \Illuminate\Support\Carbon|null                    $created_at
 * @property \Illuminate\Support\Carbon|null                    $updated_at
 * @property int                                                $subscription_id
 * @property-read \CreatyDev\Solarix\Cashier\Subscription       $subscription
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Sites\Models\Site newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Sites\Models\Site newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Sites\Models\Site query()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Sites\Models\Site whereActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Sites\Models\Site whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Sites\Models\Site whereDomain($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Sites\Models\Site whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Sites\Models\Site whereSubscriptionId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Sites\Models\Site whereToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Sites\Models\Site whereUpdatedAt($value)
 * @mixin \Eloquent
 * @property-read \CreatyDev\Domain\Statements\Models\Statement $statement
 * @property-read int|null                                      $statements_count
 * @property string|null $name
 * @property int|null $statement_id
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Sites\Models\Site whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Sites\Models\Site whereStatementId($value)
 * @property-read \Illuminate\Database\Eloquent\Collection|\CreatyDev\Domain\Extensions\Models\Extension[] $extensions
 * @property-read int|null $extensions_count
 * @property int $widget_request_count Tracks number of times domain widget is requested.
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Sites\Models\Site whereWidgetRequestCount($value)
 */
class Site extends Model {
  use HasToken;

  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = ['active', 'domain', 'name', 'subscription_id'];

  /**
   * The attributes that should be cast to native types.
   *
   * @var array
   */
  protected $casts = [
    'active' => 'boolean'
  ];

  /**
   * Get the host value of domain property.
   *
   * @return array|false|int|string|null
   */
  public function getDomainHost() {
    return get_domain($this->domain);
  }

  public function getWidgetScriptTag() {
    $token = $this->token;
    $url = action('Api\Controllers\Widget\WidgetController@get', [
      'token' => $token
    ]);

    return "<script src='{$url}' crossorigin='anonymous' defer></script>";
  }

  public function activate() {
    if (!$this->active) {
      $this->active = true;
      $this->save();
    }
    return true;
  }

  public function deactivate() {
    if ($this->active) {
      $this->active = false;
      $this->save();
    }
    return true;
  }

  public function extensions() {
    return $this->belongsToMany(Extension::class, 'extension_site')
      ->with(['predicates', 'actions'])
      ->withPivot('enabled_at')
      ->withTimestamps();
  }

  /**
   * Determine if site is marked as Active.
   *
   * @return bool
   */
  public function isActive() {
    return $this->active;
  }

  /**
   * Get Statement associated with this Site.
   *
   * @return BelongsTo
   */
  public function statement() {
    return $this->belongsTo(Statement::class);
  }

  /**
   * Determine if Subscription is active.
   *
   * @return boolean
   */
  public function isSubscriptionActive() {
    if ($this->subscription) {
      return $this->subscription->active();
    }
    return false;
  }

  /**
   * Determine if Subscription is valid.
   *
   * @return boolean
   */
  public function isSubscriptionValid() {
    if ($this->subscription) {
      return $this->subscription->valid();
    }
    return false;
  }

  /**
   * Determine if Site is both active and has a valid Subscription.
   *
   * @return bool
   */
  public function isValid() {
    return $this->isActive() && $this->isSubscriptionValid();
  }

  /**
   * Get simplified version of Site.
   *
   * @return array
   */
  public function toArraySimple() {
    $data = $this->toArray();
    // Discard extensions
    unset($data['extensions']);
    // Discard statements
    unset($data['statement']);
    // Discard subscription
    unset($data['subscription']);
    return $data;
  }

  /**
   * Get the Subscription record.
   */
  public function subscription() {
    return $this->belongsTo(Subscription::class);
  }

  /**
   * Get the User record.
   *
   * @return User
   */
  public function user() {
    return $this->subscription->user;
  }

  public static function withSubscriptions() {
    $instance = new static();
    (new static())::whereToken('asd');
  }
}
