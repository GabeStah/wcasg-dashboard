<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddLeadToConfirmationTokensTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('confirmation_tokens', function (Blueprint $table) {
      $table
        ->bigInteger('lead_id')
        ->unsigned()
        ->index()
        ->nullable();

      $table
        ->foreign('lead_id')
        ->references('id')
        ->on('leads')
        ->onDelete('cascade');

      // Make user_id nullable
      $table
        ->bigInteger('user_id')
        ->unsigned()
        ->nullable()
        ->change();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('confirmation_tokens', function (Blueprint $table) {
      $table->dropForeign('confirmation_tokens_lead_id_foreign');
      $table->dropColumn('lead_id');

      // Make user_id non-nullable again
      $table
        ->bigInteger('user_id')
        ->unsigned()
        ->nullable(false)
        ->change();
    });
  }
}
