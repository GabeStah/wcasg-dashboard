<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;

class CreateSitesTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('sites', function (Blueprint $table) {
      $table->bigIncrements('id');
      $table
        ->string('domain')
        ->index()
        ->comment('Root domain name + TLD.');

      $table
        ->boolean('active')
        ->default(false)
        ->comment(
          "Set by 'User'.  If 'true', allow incoming Widget requests to succeed, else fail."
        );

      $table->string('name')->nullable();

      $table
        ->unsignedBigInteger('widget_request_count')
        ->default(0)
        ->comment('Tracks number of times domain widget is requested.');

      $table
        ->uuid('token')
        ->unique()
        ->index()
        ->comment('Unique identifier to be used in API requests.');

      $table->timestamps();

      // Associate with one subscription
      $table
        ->string('subscription_id', 50)
        ->index()
        ->nullable(true);
      $table
        ->foreign('subscription_id')
        ->references('id')
        ->on('subscriptions')
        ->onDelete('set null');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::dropIfExists('sites');
  }
}
