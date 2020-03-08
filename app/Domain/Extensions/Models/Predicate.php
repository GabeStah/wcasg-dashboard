<?php

namespace CreatyDev\Domain\Extensions\Models;

use Illuminate\Database\Eloquent\Model;
use LZCompressor\LZString;

/**
 * CreatyDev\Domain\Extensions\Models\Predicate
 *
 * @property int $id
 * @property string $name
 * @property string|null $function
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\CreatyDev\Domain\Extensions\Models\Extension[] $extensions
 * @property-read int|null $extensions_count
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Extensions\Models\Predicate newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Extensions\Models\Predicate newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Extensions\Models\Predicate query()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Extensions\Models\Predicate whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Extensions\Models\Predicate whereFunction($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Extensions\Models\Predicate whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Extensions\Models\Predicate whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Extensions\Models\Predicate whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Predicate extends Model {
  protected $fillable = ['function', 'name'];

  /**
   * The "booting" method of the model.
   *
   * @return void
   */
  public static function boot() {
    parent::boot();

    static::creating(function (Predicate $predicate) {
      if (isset($predicate->function)) {
        $predicate->function = LZString::compressToBase64($predicate->function);
      }
    });
  }

  public function extensions() {
    return $this->belongsToMany(
      Extension::class,
      'extension_predicate'
    )->withTimestamps();
  }
}
