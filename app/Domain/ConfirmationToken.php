<?php

namespace CreatyDev\Domain;

use CreatyDev\Domain\Leads\Models\Lead;
use CreatyDev\Domain\Users\Models\User;
use Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Carbon;

/**
 * CreatyDev\Domain\\ConfirmationToken
 *
 * @property int $id
 * @property int $user_id
 * @property string $token
 * @property Carbon $expires_at
 * @property-read User $user
 * @method static Builder|ConfirmationToken newModelQuery()
 * @method static Builder|ConfirmationToken newQuery()
 * @method static Builder|ConfirmationToken query()
 * @method static Builder|ConfirmationToken whereExpiresAt($value)
 * @method static Builder|ConfirmationToken whereId($value)
 * @method static Builder|ConfirmationToken whereToken($value)
 * @method static Builder|ConfirmationToken whereUserId($value)
 * @mixin Eloquent
 */
class ConfirmationToken extends Model {
  public $timestamps = false;

  protected $dates = ['expires_at'];

  protected $fillable = ['token', 'expires_at'];

  /**
   * The "booting" method of the model.
   *
   * @return void
   */
  public static function boot() {
    parent::boot();

    static::creating(function ($token) {
      // delete any previously available confirmation token
      if ($token->lead) {
        optional($token->lead->confirmationToken)->delete();
      } elseif ($token->user) {
        optional($token->user->confirmationToken)->delete();
      }
    });
  }

  /**
   * The route key for the model.
   *
   * @return string
   */
  public function getRouteKeyName() {
    return 'token';
  }

  /**
   * Get the token lead.
   *
   * @return BelongsTo
   */
  public function lead() {
    return $this->belongsTo(Lead::class);
  }

  /**
   * Get the token user.
   *
   * @return BelongsTo
   */
  public function user() {
    return $this->belongsTo(User::class);
  }

  /**
   * Check's if token has expired.
   *
   * @return bool
   */
  public function hasExpired() {
    return $this->freshTimestamp()->gt($this->expires_at);
  }
}
