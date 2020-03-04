<?php

namespace CreatyDev\Domain\Extensions\Models;

use CreatyDev\Domain\Sites\Models\Site;
use Illuminate\Database\Eloquent\Model;

class Extension extends Model {
  /**
   * The attributes that should be cast to native types.
   *
   * @var array
   */
  protected $casts = [
    'enabled' => 'boolean',
    'imported' => 'boolean'
  ];

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
    return $this->belongsToMany(Site::class, 'extension_site')
      ->with(['predicates', 'actions'])
      ->withPivot('enabled_at')
      ->withTimestamps();
  }
}
