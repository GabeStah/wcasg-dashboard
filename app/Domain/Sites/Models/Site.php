<?php

namespace CreatyDev\Domain\Sites\Models;

use Illuminate\Database\Eloquent\Model;
use Laravel\Cashier\Subscription;

class Site extends Model {
    /**
     * The attributes that should be hidden.
     *
     * @var array
     */
    protected $hidden = ['token'];

    /**
     * Get the Subscription record.
     */
    public function subscription() {
        return $this->belongsTo(Subscription::class);
    }
}
