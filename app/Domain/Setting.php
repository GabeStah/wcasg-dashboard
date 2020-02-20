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
 * @property int $id
 * @property int $default_statement_template
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Setting whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Setting whereDefaultStatementTemplate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Setting whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Setting whereUpdatedAt($value)
 */
class Setting extends Model {
  protected $fillable = ['default_statement_template'];
}
