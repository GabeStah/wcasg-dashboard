<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddCodeAndPathToCouponsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('coupons', function (Blueprint $table) {
      $table
        ->string('code')
        ->nullable(false)
        ->unique()
        ->index()
        ->comment('Unique coupon code entered by user to apply discount.');
      $table
        ->string('path')
        ->unique()
        ->nullable(true)
        ->index()
        ->index('Optional route for URL-based coupon links (e.g. /coolname).');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('coupons', function (Blueprint $table) {
      $table->removeColumn('code');
      $table->removeColumn('path');
    });
  }
}
