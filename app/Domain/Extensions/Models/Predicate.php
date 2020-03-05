<?php

namespace CreatyDev\Domain\Extensions\Models;

use Illuminate\Database\Eloquent\Model;
use LZCompressor\LZString;

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
