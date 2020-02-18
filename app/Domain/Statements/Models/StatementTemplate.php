<?php

namespace CreatyDev\Domain\Statements\Models;

use CreatyDev\Domain\Sites\Models\Site;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;

/**
 * CreatyDev\Domain\Statements\Models\StatementTemplate
 *
 * @property int                                                                                           $id
 * @property string                                                                                        $content
 * @property \Illuminate\Support\Carbon|null                                                               $created_at
 * @property \Illuminate\Support\Carbon|null                                                               $updated_at
 * @property-read int|null                                                                                 $statements_count
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Statements\Models\StatementTemplate newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Statements\Models\StatementTemplate newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Statements\Models\StatementTemplate query()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Statements\Models\StatementTemplate whereContent($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Statements\Models\StatementTemplate whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Statements\Models\StatementTemplate whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Statements\Models\StatementTemplate whereUpdatedAt($value)
 * @mixin \Eloquent
 * @property-read \Illuminate\Database\Eloquent\Collection|\CreatyDev\Domain\Statements\Models\Statement[] $statements
 * @property string                                                                                        $name
 * @property array|null                                                                                    $default_config
 * @property-read \Illuminate\Database\Eloquent\Collection|\CreatyDev\Domain\Sites\Models\Site[]           $sites
 * @property-read int|null                                                                                 $sites_count
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Statements\Models\StatementTemplate whereDefaultConfig($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Statements\Models\StatementTemplate whereIsFallback($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Statements\Models\StatementTemplate whereName($value)
 */
class StatementTemplate extends Model {
  /**
   * Default values.
   *
   * @var array
   */
  protected $attributes = [
    'default_config' => '{ "includeContactInfo": true }'
  ];

  /**
   * The attributes that should be cast to native types.
   *
   * @var array
   */
  protected $casts = [
    'default_config' => 'array'
  ];

  protected $fillable = ['content', 'default_config', 'name'];

  public function __construct(array $attributes = []) {
    parent::__construct($attributes);

    if (!isset($attributes['content']) && !isset($this->content)) {
      // Default content template.
      $this->content = app('files')->get(
        resource_path('assets/templates/default.html')
      );
    }
  }

  public function render() {
    return $this->view()->render();
  }

  /**
   * Get all Sites using this Template.
   *
   * @return HasManyThrough
   */
  public function sites() {
    return $this->hasManyThrough(
      Site::class,
      Statement::class,
      'statement_template_id',
      'statement_id',
      'id',
      'id'
    );
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
