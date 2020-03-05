<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateExtensionPredicateTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('extension_predicate', function (Blueprint $table) {
      $table->bigIncrements('id');
      $table->timestamps();

      $table->unsignedBigInteger('extension_id')->index();

      $table
        ->foreign('extension_id')
        ->references('id')
        ->on('extensions')
        ->onDelete('cascade');

      $table->unsignedBigInteger('predicate_id')->index();

      $table
        ->foreign('predicate_id')
        ->references('id')
        ->on('predicates')
        ->onDelete('cascade');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::dropIfExists('extension_predicate');
  }
}
