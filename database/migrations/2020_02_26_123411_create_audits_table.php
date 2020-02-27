<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAuditsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('audits', function (Blueprint $table) {
      $table
        ->string('id', 36)
        ->unique()
        ->primary();

      $table->string('url')->index();

      $table
        ->string('task_id')
        ->unique()
        ->nullable();

      $table
        ->string('result_id')
        ->unique()
        ->nullable();

      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::dropIfExists('audits');
  }
}
