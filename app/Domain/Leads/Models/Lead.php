<?php

namespace CreatyDev\Domain\Leads\Models;

use CreatyDev\App\Traits\Eloquent\Auth\HasConfirmationToken;
use CreatyDev\Domain\Audits\Models\Audit;
use CreatyDev\Domain\Subscriptions\Models\Plan;
use CreatyDev\Domain\Users\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * CreatyDev\Domain\Leads\Models\Lead
 *
 * @property int $id
 * @property string|null $url
 * @property string|null $mailto_address
 * @property string|null $first_name
 * @property string|null $last_name
 * @property string|null $company_name
 * @property string|null $address1
 * @property string|null $address2
 * @property string|null $city
 * @property string|null $state
 * @property string|null $postal_code
 * @property string|null $country
 * @property string|null $email
 * @property string|null $phone
 * @property string|null $audit_id
 * @property int|null $user_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \CreatyDev\Domain\Audits\Models\Audit|null $audit
 * @property-read string $name
 * @property-read \CreatyDev\Domain\Users\Models\User|null $user
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Leads\Models\Lead newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Leads\Models\Lead newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Leads\Models\Lead query()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Leads\Models\Lead whereAddress1($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Leads\Models\Lead whereAddress2($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Leads\Models\Lead whereAuditId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Leads\Models\Lead whereCity($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Leads\Models\Lead whereCompanyName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Leads\Models\Lead whereCountry($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Leads\Models\Lead whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Leads\Models\Lead whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Leads\Models\Lead whereFirstName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Leads\Models\Lead whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Leads\Models\Lead whereLastName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Leads\Models\Lead whereMailtoAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Leads\Models\Lead wherePhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Leads\Models\Lead wherePostalCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Leads\Models\Lead whereState($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Leads\Models\Lead whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Leads\Models\Lead whereUrl($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Leads\Models\Lead whereUserId($value)
 * @mixin \Eloquent
 * @property array|null $metadata
 * @property string|null $plan_id
 * @property-read \CreatyDev\Domain\Subscriptions\Models\Plan|null $plan
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Leads\Models\Lead whereMetadata($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Leads\Models\Lead wherePlanId($value)
 * @property-read \CreatyDev\Domain\ConfirmationToken $confirmationToken
 */
class Lead extends Model {
  use HasConfirmationToken;
  /**
   * The attributes that should be appended to the model.
   *
   * @var array
   */
  protected $appends = ['name'];

  protected $casts = ['metadata' => 'json'];

  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
    'url',
    'first_name',
    'last_name',
    'company_name',
    'address1',
    'address2',
    'city',
    'state',
    'postal_code',
    'country',
    'email',
    'phone',
    'mailto_address',
    'audit_id',
    'user_id',
    'plan_id',
    'metadata'
  ];

  /**
   * Get associated audit.
   *
   * @return BelongsTo
   */
  public function audit() {
    return $this->belongsTo(Audit::class);
  }

  /**
   * Get full name as attribute.
   *
   * @return string
   */
  public function getNameAttribute() {
    return $this->first_name . ' ' . $this->last_name;
  }

  /**
   * Gets the domains list associated with this lead.
   *
   * @return mixed
   */
  public function getDomains() {
    if ($this->metadata && isset($this->metadata['domains'])) {
      return $this->metadata['domains'];
    }
  }

  /**
   * Get associated Plan.
   *
   * @return BelongsTo
   */
  public function plan() {
    return $this->belongsTo(Plan::class);
  }

  /**
   * Get associated User.
   *
   * @return BelongsTo
   */
  public function user() {
    return $this->belongsTo(User::class);
  }
}
