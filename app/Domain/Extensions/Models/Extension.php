<?php

namespace CreatyDev\Domain\Extensions\Models;

use CreatyDev\Domain\Sites\Models\Site;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

/**
 * CreatyDev\Domain\Extensions\Models\Extension
 *
 * @property int $id
 * @property string $description
 * @property string $name
 * @property bool $enabled
 * @property bool $imported
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\CreatyDev\Domain\Extensions\Models\Action[] $actions
 * @property-read int|null $actions_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\CreatyDev\Domain\Extensions\Models\Predicate[] $predicates
 * @property-read int|null $predicates_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\CreatyDev\Domain\Sites\Models\Site[] $sites
 * @property-read int|null $sites_count
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Extensions\Models\Extension newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Extensions\Models\Extension newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Extensions\Models\Extension query()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Extensions\Models\Extension whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Extensions\Models\Extension whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Extensions\Models\Extension whereEnabled($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Extensions\Models\Extension whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Extensions\Models\Extension whereImported($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Extensions\Models\Extension whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Extensions\Models\Extension whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Extension extends Model {
  /**
   * The attributes that should be cast to native types.
   *
   * @var array
   */
  protected $casts = [
    'enabled' => 'boolean',
    'imported' => 'boolean'
  ];

  protected $fillable = ['description', 'enabled', 'imported', 'name'];

  public function actions() {
    return $this->belongsToMany(
      Action::class,
      'extension_action'
    )->withTimestamps();
  }

  public function predicates() {
    return $this->belongsToMany(
      Predicate::class,
      'extension_predicate'
    )->withTimestamps();
  }

  public function scopeEnabled(Builder $query) {
    return $query->where('enabled', 1);
  }

  public function scopeImported(Builder $query) {
    return $query->where('imported', 1);
  }

  public function sites() {
    return $this->belongsToMany(Site::class, 'extension_site')
      ->with(['predicates', 'actions'])
      ->withPivot('enabled_at')
      ->withTimestamps();
  }
}
