<?php

namespace CreatyDev\Domain\Projects\Models;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Model;
use CreatyDev\App\Tenant\Traits\ForTenants;

/**
 * CreatyDev\Domain\Projects\Models\Project
 *
 * @property int $id
 * @property int $company_id
 * @property string $name
 * @property string $slug
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Projects\Models\Project findSimilarSlugs($attribute, $config, $slug)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Projects\Models\Project newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Projects\Models\Project newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Projects\Models\Project query()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Projects\Models\Project whereCompanyId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Projects\Models\Project whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Projects\Models\Project whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Projects\Models\Project whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Projects\Models\Project whereSlug($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Projects\Models\Project whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Projects\Models\Project withoutForTenants()
 * @mixin \Eloquent
 */
class Project extends Model
{
    use Sluggable,
        ForTenants;

    protected $fillable = [
        'name',
        'slug'
    ];

    /**
     * Return the sluggable configuration array for this model.
     *
     * @return array
     */
    public function sluggable()
    {
        return [
            'slug' => [
                'source' => 'name'
            ]
        ];
    }

    /**
     * Get the route key for the model.
     *
     * @return string
     */
    public function getRouteKeyName()
    {
        return 'slug';
    }
}
