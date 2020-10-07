<?php

namespace CreatyDev\Domain\Configuration\Models;

use Eloquent;
use Illuminate\Contracts\Filesystem\FileNotFoundException;
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
   * Generate default Configuration db entry from template file contents.
   *
   * @param $name
   * @param string $type
   * @param string $path
   * @return Configuration|null
   * @throws FileNotFoundException
   */
  private static function createDefault(
    $name,
    $type = 'html',
    $path = 'assets/templates/configuration'
  ) {
    // Lookup default
    $data = app('files')->get(resource_path("$path/$name.$type"));

    if ($data) {
      return Configuration::create([
        'data' => $data,
        'name' => $name,
        'type' => $type
      ]);
    }
    return null;
  }

  /**
   * Get configuration instance by name.
   *
   * @param $name
   * @return Model|null
   * @throws FileNotFoundException
   */
  public static function byName($name) {
    $found = Configuration::where('name', '=', $name)->first();
    if (!$found) {
      $found = self::createDefault($name);
    }
    return $found;
  }
}
