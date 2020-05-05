<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class SetForeignKeysNullOnDeleteAuditsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('audits', function (Blueprint $table) {
      $table->dropForeign('user_id');

      $table
        ->foreign('user_id')
        ->references('id')
        ->on('users')
        ->onDelete('SET NULL');

      $table->dropForeign('site_id');

      $table
        ->foreign('site_id')
        ->references('id')
        ->on('sites')
        ->onDelete('SET NULL');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('audits', function (Blueprint $table) {
      $table->dropForeign('user_id');

      $table
        ->foreign('user_id')
        ->references('id')
        ->on('users');

      $table->dropForeign('site_id');

      $table
        ->foreign('site_id')
        ->references('id')
        ->on('sites');
    });
  }
}
