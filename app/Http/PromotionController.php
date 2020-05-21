<?php

namespace CreatyDev\Http;

use Cookie;
use CreatyDev\App\Controllers\Controller;
use CreatyDev\Domain\Coupon\Models\Coupon;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class PromotionController extends Controller {
  /**
   * Handle promotion code paths by setting coupon cookie, then redirecting to home.
   *
   * @param Request $request
   * @return RedirectResponse
   */
  public function index(Request $request) {
    // Find matching coupon
    $coupon = Coupon::where('path', $request->decodedPath())->first();
    if (!$coupon) {
      // No coupon match, abort
      abort(404);
    }
    // Coupon found, set cookie
    return redirect()
      ->route('home')
      ->withCookies([Cookie::make('coupon_id', $coupon->id, 60)]);
  }
}
