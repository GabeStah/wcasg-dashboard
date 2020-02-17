<?php

namespace CreatyDev\Domain\Statements\Models;

use CreatyDev\Domain\Sites\Models\Site;
use CreatyDev\Solarix\Cashier\Subscription;
use Illuminate\Database\Eloquent\Model;

/**
 * CreatyDev\Domain\Statements\Models\Statement
 *
 * @property int $id
 * @property string $content
 * @property array|null $config
 * @property int $statement_template_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property \Illuminate\Database\Eloquent\Collection|\CreatyDev\Domain\Sites\Models\Site[] $sites
 * @property-read int|null $sites_count
 * @property-read \CreatyDev\Domain\Statements\Models\StatementTemplate $statementTemplate
 * @property-read \Illuminate\Database\Eloquent\Collection|\CreatyDev\Solarix\Cashier\Subscription[] $subscriptions
 * @property-read int|null $subscriptions_count
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Statements\Models\Statement newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Statements\Models\Statement newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Statements\Models\Statement query()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Statements\Models\Statement whereConfig($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Statements\Models\Statement whereContent($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Statements\Models\Statement whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Statements\Models\Statement whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Statements\Models\Statement whereStatementTemplateId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Statements\Models\Statement whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Statement extends Model {
  /**
   * The attributes that should be cast to native types.
   *
   * @var array
   */
  protected $casts = [
    'config' => 'array'
  ];

  protected $fillable = ['config', 'statement_template_id'];

  public function getContentAttribute() {
    return $this->statementTemplate->content;
  }

  public function render() {
    return $this->view()->render();
  }

  public function setSitesAttribute(Site $site) {
    $this->sites()->save($site);
  }

  /**
   * Get sites using this statement.
   */
  public function sites() {
    return $this->hasMany(Site::class);
  }

  public function statementTemplate() {
    return $this->belongsTo(StatementTemplate::class, 'statement_template_id');
  }

  public function subscriptions() {
    return $this->hasManyThrough(
      Subscription::class,
      Site::class,
      'statement_id', // Foreign on Site
      'id', // Foreign on Sub
      'id', // local on this (Statement)
      'subscription_id' // local on Site
    )->orderBy('subscriptions.updated_at', 'desc');
  }

  public function view() {
    return view(['template' => $this->content], ['config' => $this->config]);
  }
}
