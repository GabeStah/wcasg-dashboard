<?php

namespace CreatyDev\Solarix\Audit;

use Jenssegers\Mongodb\Eloquent\Model;

class Task extends Model {
  protected $connection = 'mongodb';
  protected $fillable = ['_id', 'name', 'url', 'standard', 'ignore', 'headers'];

  public function result() {
    return $this->hasOne(Result::class);
  }
}
