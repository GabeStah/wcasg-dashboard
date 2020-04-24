<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCouponsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('coupons', function (Blueprint $table) {
      $table
        ->string('id', 50)
        ->index()
        ->primary();
      $table->enum('currency', ['usd'])->default('usd');
      $table
        ->enum('duration', ['forever', 'once', 'repeating'])
        ->comment(
          'Describes how long a customer who applies this coupon will get the discount.'
        );
      $table
        ->integer('duration_in_months')
        ->nullable()
        ->comment(
          'If duration is repeating, the number of months the coupon applies. Null if coupon duration is forever or once.'
        );
      $table
        ->integer('max_redemptions')
        ->nullable()
        ->comment(
          'Maximum number of times this coupon can be redeemed, in total, across all customers, before it is no longer valid.'
        );
      $table->json('metadata')->nullable();
      $table
        ->string('name')
        ->unique()
        ->comment(
          'Name of the coupon displayed to customers on for instance invoices or receipts.'
        );
      $table
        ->double('percent_off', 8, 2)
        ->comment(
          'Percent that will be taken off the subtotal of any invoices for this customer for the duration of the coupon.'
        );
      $table
        ->timestamp('redeem_by')
        ->nullable()
        ->comment('Date after which coupon can no longer be redeemed.');
      $table->timestamps();
      $table
        ->boolean('valid')
        ->default(true)
        ->comment(
          'Taking account of the above properties, whether this coupon can still be applied to a customer'
        );
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::dropIfExists('coupons');
  }
}
