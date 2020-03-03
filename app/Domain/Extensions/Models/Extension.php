<?php

namespace CreatyDev\Domain\Extensions\Models;

use CreatyDev\Domain\Sites\Models\Site;
use Illuminate\Database\Eloquent\Model;

class Extension extends Model {
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

  public function sites() {
    return $this->belongsToMany(
      Site::class,
      'extension_site'
    )->withTimestamps();
  }
}
