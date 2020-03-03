<?php
namespace CreatyDev\Solarix\Pivots;

use CreatyDev\Domain\Sites\Models\Site;
use CreatyDev\Domain\Statements\Models\Statement;
use CreatyDev\Solarix\Cashier\Subscription;
use Illuminate\Database\Eloquent\Relations\Pivot;

/**
 * CreatyDev\Solarix\Pivots\SiteStatement
 *
 * @property int $site_id
 * @property int $statement_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \CreatyDev\Domain\Sites\Models\Site $site
 * @property-read \CreatyDev\Domain\Statements\Models\Statement $statement
 * @property-read \Illuminate\Database\Eloquent\Collection|\CreatyDev\Solarix\Cashier\Subscription[] $subscriptions
 * @property-read int|null $subscriptions_count
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Solarix\Pivots\SiteStatement newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Solarix\Pivots\SiteStatement newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Solarix\Pivots\SiteStatement query()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Solarix\Pivots\SiteStatement whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Solarix\Pivots\SiteStatement whereSiteId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Solarix\Pivots\SiteStatement whereStatementId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Solarix\Pivots\SiteStatement whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class SiteStatement extends Pivot {
  public function site() {
    return $this->belongsTo(Site::class);
  }

  public function statement() {
    return $this->belongsTo(Statement::class);
  }

  /**
   * The the Audio Files the user has from their subscribed podcasts.
   */
  public function subscriptions() {
    return $this->hasManyThrough(Subscription::class, Site::class);
  }
}
