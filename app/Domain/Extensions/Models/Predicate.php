<?php

namespace CreatyDev\Domain\Extensions\Models;

use Illuminate\Database\Eloquent\Model;

class Predicate extends Model {
  protected $fillable = ['function', 'name'];

  public function extensions() {
    return $this->belongsToMany(
      Extension::class,
      'extension_predicate'
    )->withTimestamps();
  }
}
