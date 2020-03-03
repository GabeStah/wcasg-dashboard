<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateExtensionSiteTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('extension_site', function (Blueprint $table) {
      $table->bigIncrements('id');

      $table->timestamp('enabled_at')->nullable();

      $table->timestamps();

      $table->unsignedBigInteger('extension_id')->index();

      $table
        ->foreign('extension_id')
        ->references('id')
        ->on('extensions');

      $table->unsignedBigInteger('site_id')->index();

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
    Schema::dropIfExists('extension_site');
  }
}
