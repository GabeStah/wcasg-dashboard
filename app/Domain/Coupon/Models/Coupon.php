<?php

namespace CreatyDev\Domain\Coupon\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * CreatyDev\Domain\Coupon\Models\Coupon
 *
 * @property int $id
 * @property string $name
 * @property string $gateway_id
 * @property float $percent_off
 * @property string $duration
 * @property int|null $duration_in_months
 * @property string|null $currency
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Coupon\Models\Coupon newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Coupon\Models\Coupon newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Coupon\Models\Coupon query()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Coupon\Models\Coupon whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Coupon\Models\Coupon whereCurrency($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Coupon\Models\Coupon whereDuration($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Coupon\Models\Coupon whereDurationInMonths($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Coupon\Models\Coupon whereGatewayId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Coupon\Models\Coupon whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Coupon\Models\Coupon whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Coupon\Models\Coupon wherePercentOff($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Coupon\Models\Coupon whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Coupon extends Model {
  protected $fillable = [
    'name',
    'gateway_id',
    'percent_off',
    'duration',
    'duration_in_months',
    'currency'
  ];
}
