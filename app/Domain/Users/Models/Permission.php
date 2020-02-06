<?php

namespace CreatyDev\Domain\Users\Models;

use CreatyDev\App\Traits\Eloquent\Ordering\OrderableTrait;
use Illuminate\Database\Eloquent\Model;

/**
 * CreatyDev\Domain\Users\Models\Permission
 *
 * @property int $id
 * @property string $name
 * @property int $usable
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Kalnoy\Nestedset\Collection|\CreatyDev\Domain\Users\Models\Role[] $roles
 * @property-read int|null $roles_count
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\Permission latestDelete()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\Permission latestFirst()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\Permission newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\Permission newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\Permission query()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\Permission whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\Permission whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\Permission whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\Permission whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\Permission whereUsable($value)
 * @mixin \Eloquent
 */
class Permission extends Model
{
    use OrderableTrait;

    protected $fillable = [
        'name',
        'usable'
    ];

    /**
     * The roles that belong to the permission.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function roles()
    {
        return $this->belongsToMany(Role::class, 'role_permissions')
            ->withTimestamps();
    }
}
