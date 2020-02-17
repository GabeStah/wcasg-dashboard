<?php

namespace CreatyDev\Domain\Users\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * CreatyDev\Domain\Users\Models\TwoFactor
 *
 * @property int $id
 * @property int $user_id
 * @property string|null $identifier
 * @property string $phone
 * @property string $dial_code
 * @property int $verified
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \CreatyDev\Domain\Users\Models\User $user
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\TwoFactor newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\TwoFactor newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\TwoFactor query()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\TwoFactor whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\TwoFactor whereDialCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\TwoFactor whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\TwoFactor whereIdentifier($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\TwoFactor wherePhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\TwoFactor whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\TwoFactor whereUserId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\TwoFactor whereVerified($value)
 * @mixin \Eloquent
 */
class TwoFactor extends Model {
  protected $table = 'two_factor';

  protected $fillable = ['phone', 'dial_code', 'identifier', 'verified'];

  /**
   * The "booting" method of the model.
   *
   * @return void
   */
  public static function boot() {
    parent::boot();

    static::creating(function ($twoFactor) {
      // delete any previously available two factor authorization
      optional($twoFactor->user->twoFactor)->delete();
    });
  }

  /**
   * Check whether the phone is verified.
   *
   * @return mixed
   */
  public function isVerified() {
    return $this->verified;
  }

  /**
   * Get the two factor user.
   *
   * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
   */
  public function user() {
    return $this->belongsTo(User::class);
  }
}
