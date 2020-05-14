<?php

use CreatyDev\Domain\Subscriptions\Models\Plan;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddTokenToPlansTable extends Migration {
  /**
   * Insert tokens for existing models.
   *
   * @throws Exception
   */
  private function insertMissingTokens() {
    $plans = Plan::whereNull('token')->get();
    foreach ($plans as $plan) {
      $plan->token = bin2hex(random_bytes(18));
      $plan->save();
    }
  }

  /**
   * Run the migrations.
   *
   * @return void
   * @throws Exception
   */
  public function up() {
    Schema::table('plans', function (Blueprint $table) {
      $table
        ->uuid('token')
        ->unique()
        ->index()
        ->nullable()
        ->comment('Unique identifier used in API requests.');
    });

    $this->insertMissingTokens();
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('plans', function (Blueprint $table) {
      $table->dropColumn('token');
    });
  }
}
