<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSiteStatementTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('site_statement', function (Blueprint $table) {
      $table->unsignedBigInteger('site_id')->index();
      $table
        ->foreign('site_id')
        ->references('id')
        ->on('sites')
        ->onDelete('cascade');

      $table->unsignedBigInteger('statement_id')->index();
      $table
        ->foreign('statement_id')
        ->references('id')
        ->on('statements')
        ->onDelete('cascade');

      $table->primary(['site_id', 'statement_id']);

      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::dropIfExists('site_statement');
  }
}
