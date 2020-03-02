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

      $table->timestamp('expired_at')->nullable();

      $table->timestamps();

      $table
        ->unsignedBigInteger('user_id')
        ->index()
        ->nullable(true);

      $table
        ->foreign('user_id')
        ->references('id')
        ->on('users');

      $table
        ->unsignedBigInteger('site_id')
        ->index()
        ->nullable(true);

      $table
        ->foreign('site_id')
        ->references('id')
        ->on('sites');
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
