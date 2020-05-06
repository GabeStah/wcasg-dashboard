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
      $table->dropForeign('audits_ibfk_1');
      $table->dropForeign('audits_ibfk_2');
      $table->dropForeign('audits_site_id_foreign');
      $table->dropForeign('audits_user_id_foreign');

      $table
        ->foreign('user_id', 'audits_user_id_foreign')
        ->references('id')
        ->on('users')
        ->onDelete('SET NULL');

      $table
        ->foreign('site_id', 'audits_site_id_foreign')
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
    // Never reverse migration.
  }
}
