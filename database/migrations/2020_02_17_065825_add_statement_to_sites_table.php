<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddStatementToSitesTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('sites', function (Blueprint $table) {
      // Associate with one statement
      $table
        ->bigInteger('statement_id')
        ->unsigned()
        ->index()
        ->nullable();
      $table
        ->foreign('statement_id')
        ->references('id')
        ->on('statements');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('sites', function (Blueprint $table) {
      $table->removeColumn('statement_id');
    });
  }
}
