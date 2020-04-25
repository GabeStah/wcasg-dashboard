<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCouponUserTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('coupon_user', function (Blueprint $table) {
      $table->bigIncrements('id');

      $table->string('coupon_id', 50)->index();
      $table
        ->foreign('coupon_id')
        ->references('id')
        ->on('coupons')
        ->onDelete('cascade');

      $table->unsignedBigInteger('user_id')->index();
      $table
        ->foreign('user_id')
        ->references('id')
        ->on('users')
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
    Schema::dropIfExists('coupon_user');
  }
}
