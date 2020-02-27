<?php

namespace CreatyDev\Domain\Audits\Models;

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
 */
class Audit extends Model {
  protected $fillable = ['url', 'task_id', 'result_id'];
}
