<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStatementTemplatesTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('statement_templates', function (Blueprint $table) {
      $table->bigIncrements('id')->index();
      $table->string('name')->default('Default');
      $table->mediumText('content');
      $table->json('default_config')->nullable();
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::dropIfExists('statement_templates');
  }
}
