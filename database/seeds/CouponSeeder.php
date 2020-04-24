<?php

use CreatyDev\Domain\Coupon\Models\Coupon;
use Illuminate\Database\Seeder;

class CouponSeeder extends Seeder {
  public function run() {
    for ($i = 0; $i <= 2; $i++) {
      // Coupon
      factory(Coupon::class)->create();
    }
  }
}
