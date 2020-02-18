<?php

namespace CreatyDev\Domain;

use Illuminate\Database\Eloquent\Model;

/**
 * CreatyDev\Domain\Setting
 *
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Setting newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Setting newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Setting query()
 * @mixin \Eloquent
 */
class Setting extends Model {
  protected $fillable = ['default_statement_template'];
}
