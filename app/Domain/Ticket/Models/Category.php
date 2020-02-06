<?php

namespace CreatyDev\Domain\Ticket\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * CreatyDev\Domain\Ticket\Models\Category
 *
 * @property int $id
 * @property string $name
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\CreatyDev\Domain\Ticket\Models\Ticket[] $tickets
 * @property-read int|null $tickets_count
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Ticket\Models\Category newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Ticket\Models\Category newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Ticket\Models\Category query()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Ticket\Models\Category whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Ticket\Models\Category whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Ticket\Models\Category whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Ticket\Models\Category whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Category extends Model
{
    protected $fillable = ['name'];

    public function tickets()
    {
        return $this->hasMany(Ticket::class);
    }
}
