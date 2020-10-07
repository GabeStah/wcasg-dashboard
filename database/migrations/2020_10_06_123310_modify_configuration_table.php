<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ModifyConfigurationTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('configuration', function (Blueprint $table) {
      $table->dropColumn('settings');
      $table
        ->string('type')
        ->nullable(false)
        ->index();
      $table
        ->string('name')
        ->nullable(false)
        ->unique()
        ->index();
      $table->longText('data')->nullable(false);
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('configuration', function (Blueprint $table) {
      $table->json('settings')->nullable();
      $table->dropColumn('type');
      $table->dropColumn('name');
      $table->dropColumn('data');
    });
  }
}
