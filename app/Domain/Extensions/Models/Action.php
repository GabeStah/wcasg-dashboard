<?php

namespace CreatyDev\Domain\Extensions\Models;

use Illuminate\Database\Eloquent\Model;
use LZCompressor\LZString;

/**
 * CreatyDev\Domain\Extensions\Models\Action
 *
 * @property int $id
 * @property string $name
 * @property string|null $function
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\CreatyDev\Domain\Extensions\Models\Extension[] $extensions
 * @property-read int|null $extensions_count
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Extensions\Models\Action newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Extensions\Models\Action newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Extensions\Models\Action query()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Extensions\Models\Action whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Extensions\Models\Action whereFunction($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Extensions\Models\Action whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Extensions\Models\Action whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Extensions\Models\Action whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Action extends Model {
  protected $fillable = ['function', 'name'];

  /**
   * The "booting" method of the model.
   *
   * @return void
   */
  public static function boot() {
    parent::boot();

    static::creating(function (Action $action) {
      if (isset($action->function)) {
        $action->function = LZString::compressToBase64($action->function);
      }
    });
  }

  public function extensions() {
    return $this->belongsToMany(
      Extension::class,
      'extension_action'
    )->withTimestamps();
  }
}
