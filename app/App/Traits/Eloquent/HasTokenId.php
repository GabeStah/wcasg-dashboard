<?php

namespace CreatyDev\App\Traits\Eloquent;

use Illuminate\Support\Str;

/**
 * Generates a random token attribute for id on model creation.
 *
 * Trait HasTokenId
 */
trait HasTokenId {
  public static function bootHasTokenId() {
    static::creating(function ($model) {
      if (!isset($model->attributes['id'])) {
        $model->attributes['id'] = bin2hex(random_bytes(18));
      }
    });
  }
}
