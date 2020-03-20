<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePlansTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('plans', function (Blueprint $table) {
      $table
        ->string('id', 50)
        ->index()
        ->primary();
      $table
        ->string('product_id', 50)
        ->index()
        ->nullable(false);
      $table->integer('amount')->nullable(false);
      $table
        ->string('currency')
        ->default('usd')
        ->nullable(false);
      $table
        ->enum('interval', ['day', 'week', 'month', 'year'])
        ->default('month')
        ->nullable(false);
      $table->string('nickname')->nullable(false);
      $table->boolean('active')->default(true);
      $table->boolean('teams_enabled')->default(false);
      $table->integer('teams_limit')->nullable();
      $table->integer('trial_period_days')->nullable();
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::dropIfExists('plans');
  }
}
