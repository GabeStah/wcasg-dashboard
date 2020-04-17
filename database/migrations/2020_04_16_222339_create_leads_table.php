<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLeadsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('leads', function (Blueprint $table) {
      $table->bigIncrements('id');

      $table
        ->string('url')
        ->index()
        ->nullable();
      $table->string('mailto_address')->nullable();
      $table->string('first_name')->nullable();
      $table->string('last_name')->nullable();
      $table->string('company_name', 100)->nullable();
      $table->string('address1', 100)->nullable();
      $table->string('address2', 100)->nullable();
      $table->string('city', 100)->nullable();
      $table->string('state', 100)->nullable();
      $table->string('postal_code', 50)->nullable();

      $table
        ->string('country', 100)
        ->nullable()
        ->default('United States');
      $table->string('email')->nullable();
      $table->string('phone')->nullable();

      $table
        ->string('audit_id', 36)
        ->index()
        ->nullable();
      $table
        ->foreign('audit_id')
        ->references('id')
        ->on('audits');

      $table
        ->bigInteger('user_id')
        ->unsigned()
        ->index()
        ->nullable();
      $table
        ->foreign('user_id')
        ->references('id')
        ->on('users');

      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::dropIfExists('leads');
  }
}
