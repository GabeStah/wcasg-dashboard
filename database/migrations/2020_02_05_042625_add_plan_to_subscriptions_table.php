<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddPlanToSubscriptionsTable extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::table('subscriptions', function (Blueprint $table) {
            $table
                ->bigInteger('plan_id')
                ->unsigned()
                ->index();
            $table
                ->foreign('plan_id')
                ->references('id')
                ->on('plans');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::table('subscriptions', function (Blueprint $table) {
            $table->dropColumn('plan_id');
        });
    }
}
