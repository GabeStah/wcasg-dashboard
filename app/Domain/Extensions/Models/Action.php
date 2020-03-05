<?php

namespace CreatyDev\Domain\Extensions\Models;

use Illuminate\Database\Eloquent\Model;
use LZCompressor\LZString;

class Action extends Model {
  protected $fillable = ['function'];

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
