<?php

namespace CreatyDev\Domain\Extensions\Models;

use Illuminate\Database\Eloquent\Model;

class Action extends Model {
  protected $fillable = ['function'];

  public function extensions() {
    return $this->belongsToMany(
      Extension::class,
      'extension_action'
    )->withTimestamps();
  }
}
