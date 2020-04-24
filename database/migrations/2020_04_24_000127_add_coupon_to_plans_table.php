<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddCouponToPlansTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('plans', function (Blueprint $table) {
      $table
        ->string('coupon_id', 50)
        ->index()
        ->nullable();

      $table
        ->foreign('coupon_id')
        ->references('id')
        ->on('coupons');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('plans', function (Blueprint $table) {
      //
    });
  }
}
