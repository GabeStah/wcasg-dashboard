<?php

namespace CreatyDev\Domain\Audits\Models;

use Carbon\Carbon;
use CreatyDev\App\Traits\Eloquent\HasTokenId;
use Illuminate\Database\Eloquent\Model;

/**
 * CreatyDev\Domain\Audits\Models\Audit
 *
 * @property int $id
 * @property string|null $url
 * @property string|null $task_id
 * @property string|null $result_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Audits\Models\Audit newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Audits\Models\Audit newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Audits\Models\Audit query()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Audits\Models\Audit whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Audits\Models\Audit whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Audits\Models\Audit whereResultId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Audits\Models\Audit whereTaskId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Audits\Models\Audit whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Audits\Models\Audit whereUrl($value)
 * @mixin \Eloquent
 * @property string|null $expired_at
 * @property int|null $user_id
 * @property int|null $site_id
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Audits\Models\Audit whereExpiredAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Audits\Models\Audit whereSiteId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Audits\Models\Audit whereUserId($value)
 */
class Audit extends Model {
  use HasTokenId;

  public $incrementing = false;
  protected $fillable = [
    'id',
    'result_id',
    'site_id',
    'task_id',
    'url',
    'user_id'
  ];
  protected $keyType = 'string';
  protected $primaryKey = 'id';

  /**
   * The "booting" method of the model.
   *
   * @return void
   */
  public static function boot() {
    parent::boot();

    static::creating(function (Audit $audit) {
      // Apply expiration timestamp
      if (!isset($audit->expired_at)) {
        $audit->expired_at = Carbon::now()->addDays(
          config('audit.public_result_expiration_days')
        );
      }
    });
  }

  public function results() {
    $pa11y = resolve('CreatyDev\App\Pa11y\Pa11y');
    return $pa11y->getTaskAllResults($this->task_id);
  }
}
