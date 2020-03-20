<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSubscriptionsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('subscriptions', function (Blueprint $table) {
      $table
        ->string('id', 50)
        ->index()
        ->primary();
      $table
        ->string('plan_id')
        ->index()
        ->nullable();
      $table->unsignedBigInteger('user_id')->index();

      $table->string('name');
      $table->string('stripe_status')->default('active');
      $table->integer('quantity');
      $table->timestamp('trial_ends_at')->nullable();
      $table->timestamp('ends_at')->nullable();
      $table->timestamps();

      $table->index(['user_id', 'stripe_status']);

      $table
        ->foreign('plan_id')
        ->references('id')
        ->on('plans');

      $table
        ->foreign('user_id')
        ->references('id')
        ->on('users');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::dropIfExists('subscriptions');
  }
}
