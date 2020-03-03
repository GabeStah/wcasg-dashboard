<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateExtensionsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('extensions', function (Blueprint $table) {
      $table->bigIncrements('id');
      $table->string('description')->nullable(false);
      $table->string('name')->nullable(false);
      $table->boolean('enabled')->default(false);
      $table
        ->boolean('imported')
        ->default(false)
        ->nullable(false);
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::dropIfExists('extensions');
  }
}
