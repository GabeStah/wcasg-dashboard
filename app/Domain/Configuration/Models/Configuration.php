<?php

namespace CreatyDev\Domain\Configuration\Models;

use Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;
use LZCompressor\LZString;

/**
 * CreatyDev\Domain\Configuration\Models\Configuration
 *
 * @property int $id
 * @property array|null $settings
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @method static Builder|Configuration newModelQuery()
 * @method static Builder|Configuration newQuery()
 * @method static Builder|Configuration query()
 * @method static Builder|Configuration whereCreatedAt($value)
 * @method static Builder|Configuration whereId($value)
 * @method static Builder|Configuration whereSettings($value)
 * @method static Builder|Configuration whereUpdatedAt($value)
 * @mixin Eloquent
 */
class Configuration extends Model {
  protected $table = 'configuration';

  public $casts = [
    'data' => 'string',
    'name' => 'string',
    'type' => 'string'
  ];

  protected $fillable = ['data', 'name', 'type'];

  public function getDataAttribute($value) {
    return LZString::decompressFromBase64($value);
  }

  public function setDataAttribute($value) {
    $this->attributes['data'] = LZString::compressToBase64($value);
  }

  public function getTextAttribute() {
    return __('info.views.admin.configuration.' . $this->name);
  }

  /**
   * Get configuration instance by name.
   *
   * @param $value
   * @return Model|null
   */
  public static function byName($value) {
    return Configuration::where('name', '=', $value)->first();
  }
}
