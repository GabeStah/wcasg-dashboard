<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStatementsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('statements', function (Blueprint $table) {
      $table->bigIncrements('id')->index();
      $table->json('config')->nullable();
      $table->unsignedBigInteger('statement_template_id')->index();
      $table->timestamps();

      $table
        ->foreign('statement_template_id')
        ->references('id')
        ->on('statement_templates')
        // Delete statement when parent template deleted.
        ->onDelete('cascade');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::dropIfExists('statements');
  }
}
