<?php

/**
 * Coupon Promo Routes
 */
Route::get('/{coupon_path}', 'PromotionController@index')->name(
  'promotion.index'
);
