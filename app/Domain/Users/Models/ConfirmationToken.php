<?php

namespace CreatyDev\Domain\Users\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * CreatyDev\Domain\Users\Models\ConfirmationToken
 *
 * @property int $id
 * @property int $user_id
 * @property string $token
 * @property \Illuminate\Support\Carbon $expires_at
 * @property-read \CreatyDev\Domain\Users\Models\User $user
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\ConfirmationToken newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\ConfirmationToken newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\ConfirmationToken query()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\ConfirmationToken whereExpiresAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\ConfirmationToken whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\ConfirmationToken whereToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\ConfirmationToken whereUserId($value)
 * @mixin \Eloquent
 */
class ConfirmationToken extends Model
{
    public $timestamps = false;

    protected $dates = [
        'expires_at'
    ];

    protected $fillable = [
        'token',
        'expires_at'
    ];

    /**
     * The "booting" method of the model.
     *
     * @return void
     */
    public static function boot()
    {
        parent::boot();

        static::creating(function ($token) {
            // delete any previously available confirmation token
            optional($token->user->confirmationToken)->delete();
        });
    }

    /**
     * The route key for the model.
     *
     * @return string
     */
    public function getRouteKeyName()
    {
        return 'token';
    }

    /**
     * Get the token user.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Check's if token has expired.
     *
     * @return bool
     */
    public function hasExpired()
    {
        return $this->freshTimestamp()->gt($this->expires_at);
    }
}
