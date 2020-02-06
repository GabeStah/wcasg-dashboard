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

            $table
                ->uuid('token')
                ->unique()
                ->index()
                ->comment('Unique identifier to be used in API requests.');

            $table->timestamps();

            // Associate with one subscription
            $table
                ->bigInteger('subscription_id')
                ->unsigned()
                ->index();
            $table
                ->foreign('subscription_id')
                ->references('id')
                ->on('subscriptions');
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
