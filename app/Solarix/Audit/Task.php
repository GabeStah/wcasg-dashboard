<?php

namespace CreatyDev\Solarix\Audit;

use Jenssegers\Mongodb\Eloquent\Model;

class Task extends Model {
  protected $connection = 'mongodb';
}
