<?php

namespace CreatyDev\App\Traits\Eloquent\Roles;

use Illuminate\Support\Str;

/**
 * Generates a random token attribute on model creation.
 *
 * Trait HasToken
 * @package CreatyDev\App\Traits\Eloquent\Roles
 */
trait HasToken {
    public static function bootHasToken() {
        static::creating(function ($model) {
            if (!isset($model->attributes['token'])) {
                $model->attributes['token'] = Str::random(36);
            }
        });
    }
}
