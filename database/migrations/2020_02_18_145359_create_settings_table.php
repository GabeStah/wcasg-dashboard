<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSettingsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('settings', function (Blueprint $table) {
      $table->bigIncrements('id');
      $table->unsignedBigInteger('default_statement_template')->nullable(false);
      $table->timestamps();

      $table
        ->foreign('default_statement_template')
        ->references('id')
        ->on('statement_templates');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::dropIfExists('settings');
  }
}
