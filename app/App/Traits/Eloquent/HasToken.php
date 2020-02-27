<?php

namespace CreatyDev\App\Traits\Eloquent;

use Illuminate\Support\Str;

/**
 * Generates a random token attribute on model creation.
 *
 * Trait HasToken
 */
trait HasToken {
  public static function bootHasToken() {
    static::creating(function ($model) {
      if (!isset($model->attributes['token'])) {
        $model->attributes['token'] = bin2hex(random_bytes(18));
      }
    });
  }
}
