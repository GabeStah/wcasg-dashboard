<?php

namespace CreatyDev\Domain\Teams\Models;

use Illuminate\Database\Eloquent\Model;
use CreatyDev\Domain\Users\Models\User;

/**
 * CreatyDev\Domain\Teams\Models\Team
 *
 * @property int $id
 * @property int $user_id
 * @property string $name
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \CreatyDev\Domain\Users\Models\User $owner
 * @property-read \Illuminate\Database\Eloquent\Collection|\CreatyDev\Domain\Users\Models\User[] $users
 * @property-read int|null $users_count
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Teams\Models\Team newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Teams\Models\Team newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Teams\Models\Team query()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Teams\Models\Team whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Teams\Models\Team whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Teams\Models\Team whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Teams\Models\Team whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Teams\Models\Team whereUserId($value)
 * @mixin \Eloquent
 */
class Team extends Model
{
    protected $fillable = [
        'name'
    ];

    /**
     * Get user that owns of team.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function owner()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    /**
     * Get users that belong to team.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function users()
    {
        return $this->belongsToMany(User::class, 'team_users')
            ->withTimestamps();
    }
}
