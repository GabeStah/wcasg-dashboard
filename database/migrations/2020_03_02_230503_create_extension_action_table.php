<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateExtensionActionTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('extension_action', function (Blueprint $table) {
      $table->bigIncrements('id');
      $table->timestamps();

      $table->unsignedBigInteger('extension_id')->index();

      $table
        ->foreign('extension_id')
        ->references('id')
        ->on('extensions')
        ->onDelete('cascade');

      $table->unsignedBigInteger('action_id')->index();

      $table
        ->foreign('action_id')
        ->references('id')
        ->on('actions')
        ->onDelete('cascade');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::dropIfExists('extension_action');
  }
}
