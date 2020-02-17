<?php

namespace CreatyDev\Domain\Statements\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * CreatyDev\Domain\Statements\Models\StatementTemplate
 *
 * @property int                             $id
 * @property string                          $content
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read int|null                   $statements_count
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Statements\Models\StatementTemplate newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Statements\Models\StatementTemplate newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Statements\Models\StatementTemplate query()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Statements\Models\StatementTemplate whereContent($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Statements\Models\StatementTemplate whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Statements\Models\StatementTemplate whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Statements\Models\StatementTemplate whereUpdatedAt($value)
 * @mixin \Eloquent
 * @property-read \Illuminate\Database\Eloquent\Collection|\CreatyDev\Domain\Statements\Models\Statement[] $statements
 */
class StatementTemplate extends Model {
  /**
   * Default values.
   *
   * @var array
   */
  protected $attributes = [
    'default_config' => '{ "valid": true }'
  ];

  /**
   * The attributes that should be cast to native types.
   *
   * @var array
   */
  protected $casts = [
    'default_config' => 'array'
  ];

  protected $fillable = ['content'];

  public function render() {
    return $this->view()->render();
  }

  /**
   * Get all Statements using this template.
   *
   * @return HasMany
   */
  public function statements() {
    return $this->hasMany(Statement::class);
  }

  public function view() {
    return view(['template' => $this->content]);
  }
}
