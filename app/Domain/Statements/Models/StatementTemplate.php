<?php

namespace CreatyDev\Domain\Statements\Models;

use CreatyDev\Domain\Sites\Models\Site;
use Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;
use Illuminate\Support\Carbon;

/**
 * CreatyDev\Domain\Statements\Models\StatementTemplate
 *
 * @property int                                                                                           $id
 * @property string                                                                                        $content
 * @property Carbon|null                                                               $created_at
 * @property Carbon|null $updated_at
 * @property-read int|null                   $statements_count
 * @method static Builder|StatementTemplate newModelQuery()
 * @method static Builder|StatementTemplate newQuery()
 * @method static Builder|StatementTemplate query()
 * @method static Builder|StatementTemplate whereContent($value)
 * @method static Builder|StatementTemplate whereCreatedAt($value)
 * @method static Builder|StatementTemplate whereId($value)
 * @method static Builder|StatementTemplate whereUpdatedAt($value)
 * @mixin Eloquent
 * @property-read Collection|Statement[]     $statements
 * @property string                          $name
 * @property array|null                      $default_config
 * @property-read Collection|Site[]          $sites
 * @property-read int|null                   $sites_count
 * @method static Builder|StatementTemplate whereDefaultConfig($value)
 * @method static Builder|StatementTemplate whereIsFallback($value)
 * @method static Builder|StatementTemplate whereName($value)
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

  /**
   * Get the 'Default' StatementTemplate, otherwise create new default.
   *
   * @return StatementTemplate|Builder|Model|object|null
   */
  public static function getDefault() {
    $template = StatementTemplate::where('name', '=', 'Default')->first();
    if (!$template) {
      // Create new default.
      $template = StatementTemplate::create();
      $template->save();
    }
    return $template;
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
