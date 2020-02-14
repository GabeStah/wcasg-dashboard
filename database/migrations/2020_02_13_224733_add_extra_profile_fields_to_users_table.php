<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddExtraProfileFieldsToUsersTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('users', function (Blueprint $table) {
      $table->string('company_name', 100)->nullable();
      $table->string('address1', 100)->nullable();
      $table->string('address2', 100)->nullable();
      $table->string('city', 50)->nullable();
      $table->string('state', 50)->nullable();
      $table
        ->string('country', 50)
        ->nullable()
        ->default('United States');
      $table->string('postal_code', 20)->nullable();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('users', function (Blueprint $table) {
      $table->removeColumn('company_name');
      $table->removeColumn('address1');
      $table->removeColumn('address2');
      $table->removeColumn('city');
      $table->removeColumn('state');
      $table->removeColumn('country');
      $table->removeColumn('postal_code');
    });
  }
}
