<?php

namespace CreatyDev\Domain\Configuration\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * CreatyDev\Domain\Configuration\Models\Configuration
 *
 * @property int $id
 * @property array|null $settings
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Configuration\Models\Configuration newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Configuration\Models\Configuration newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Configuration\Models\Configuration query()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Configuration\Models\Configuration whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Configuration\Models\Configuration whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Configuration\Models\Configuration whereSettings($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Configuration\Models\Configuration whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Configuration extends Model {
  protected $table = 'configuration';

  public $casts = [
    'settings' => 'json'
  ];

  protected $fillable = ['settings'];
}
