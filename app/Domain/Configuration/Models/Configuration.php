<?php

namespace CreatyDev\Domain\Configuration\Models;

use Illuminate\Database\Eloquent\Model;

class Configuration extends Model {
  protected $table = 'configuration';

  public $casts = [
    'settings' => 'json'
  ];

  protected $fillable = ['settings'];
}
