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
 * @property array $standard
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Audits\Models\Audit whereStandard($value)
 */
class Audit extends Model {
  use HasTokenId;

  public $casts = [
    'standard' => 'json'
  ];

  public $incrementing = false;
  protected $fillable = [
    'id',
    'result_id',
    'site_id',
    'standard',
    'task_id',
    'url',
    'user_id'
  ];
  protected $keyType = 'string';
  protected $primaryKey = 'id';

  // See: http://squizlabs.github.io/HTML_CodeSniffer/Standards/WCAG2/
  public static $VALID_STANDARDS = [
    ['name' => 'WCAG2AA', 'url' => 'https://www.w3.org/TR/WCAG21/'], // Default
    [
      'name' => 'Section508',
      'url' =>
        'https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines'
    ],
    ['name' => 'WCAG2A', 'url' => 'https://www.w3.org/TR/WCAG21/'],
    ['name' => 'WCAG2AAA', 'url' => 'https://www.w3.org/TR/WCAG21/']
  ];

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

      // Set default standard if not set.
      if (!isset($audit->standard)) {
        $audit->standard = Audit::$VALID_STANDARDS[0];
      } elseif (is_string($audit->standard)) {
        $isValid = false;
        foreach (Audit::$VALID_STANDARDS as $standard) {
          if ($standard['name'] === $audit->standard) {
            $isValid = true;
            $audit->standard = $standard;
            break;
          }
        }
        // Default
        if (!$isValid) {
          $audit->standard = Audit::$VALID_STANDARDS[0];
        }
      }
    });
  }

  public function results() {
    $pa11y = resolve('CreatyDev\App\Pa11y\Pa11y');
    return $pa11y->getTaskAllResults($this->task_id);
  }
}
