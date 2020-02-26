<?php

namespace CreatyDev\Solarix\Audit;

use Jenssegers\Mongodb\Eloquent\Model;

class Result extends Model {
  protected $connection = 'mongodb';

  public function task() {
    return $this->belongsTo(Task::class);
  }
}
