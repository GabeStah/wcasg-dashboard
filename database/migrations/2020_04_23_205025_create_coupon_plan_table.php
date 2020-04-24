<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCouponPlanTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('coupon_plan', function (Blueprint $table) {
      $table->bigIncrements('id');

      $table->string('coupon_id', 50)->index();
      $table
        ->foreign('coupon_id')
        ->references('id')
        ->on('coupons')
        ->onDelete('cascade');

      $table->string('plan_id', 50)->index();
      $table
        ->foreign('plan_id')
        ->references('id')
        ->on('plans')
        ->onDelete('cascade');

      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::dropIfExists('coupon_plan');
  }
}
