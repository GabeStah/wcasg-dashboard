<?php

namespace CreatyDev\Domain\Leads\Models;

use CreatyDev\Domain\Audits\Models\Audit;
use CreatyDev\Domain\Users\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Lead extends Model {
  /**
   * The attributes that should be appended to the model.
   *
   * @var array
   */
  protected $appends = ['name'];

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
    'mailto_address'
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
   * Get associated User.
   *
   * @return BelongsTo
   */
  public function user() {
    return $this->belongsTo(User::class);
  }
}
