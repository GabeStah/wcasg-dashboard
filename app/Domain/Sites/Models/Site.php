<?php

namespace CreatyDev\Domain\Sites\Models;

use CreatyDev\App\Traits\Eloquent\Roles\HasToken;
use CreatyDev\Http\Api\Controllers\Widget\WidgetController;
use Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;
use Laravel\Cashier\Subscription;

/**
 * CreatyDev\Domain\Sites\Models\Site
 *
 * @property boolean active
 * @property int $id
 * @property string $domain Root domain name + TLD.
 * @property bool Set by 'User'.  If 'true', allow incoming Widget requests to succeed, else fail.
 * @property string $token Unique identifier to be used in API requests.
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property int $subscription_id
 * @property-read Subscription $subscription
 * @method static Builder|Site newModelQuery()
 * @method static Builder|Site newQuery()
 * @method static Builder|Site query()
 * @method static Builder|Site whereActive($value)
 * @method static Builder|Site whereCreatedAt($value)
 * @method static Builder|Site whereDomain($value)
 * @method static Builder|Site whereId($value)
 * @method static Builder|Site whereSubscriptionId($value)
 * @method static Builder|Site whereToken($value)
 * @method static Builder|Site whereUpdatedAt($value)
 * @mixin Eloquent
 */
class Site extends Model {
  use HasToken;

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
    return parse_url($this->domain, PHP_URL_HOST);
  }

  public function getWidgetScriptTag() {
    $url = action('Api\Controllers\Widget\WidgetController@get');
    $token = $this->token;

    return "<script crossorigin='anonymous' src='{$url}?token={$token}'></script>";
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

  /**
   * Determine if site is marked as Active.
   *
   * @return bool
   */
  public function isActive() {
    return $this->active;
  }

  /**
   * Determine if Subscription is active.
   *
   * @return boolean
   */
  public function isSubscriptionActive() {
    return $this->subscription()
      ->first()
      ->active();
  }

  /**
   * Determine if Subscription is valid.
   *
   * @return boolean
   */
  public function isSubscriptionValid() {
    return $this->subscription()
      ->first()
      ->valid();
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
   * Get the Subscription record.
   */
  public function subscription() {
    return $this->belongsTo(Subscription::class);
  }

  /**
   * Get the User record.
   *
   * @return mixed
   */
  public function user() {
    return $this->subscription()->user;
  }

  public static function withSubscriptions() {
    $instance = new static();
    (new static())::whereToken('asd');
  }
}
