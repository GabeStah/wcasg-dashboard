<?php
/**
 * Created by PhpStorm.
 * User: CreatyDev
 * Date: 12/29/2017
 * Time: 1:30 AM
 */

use LZCompressor\LZString;

if (!function_exists('on_page')) {
  /**
   * Check's whether request url/route matches passed link
   *
   * @param        $link
   * @param string $type
   *
   * @return null
   */
  function on_page($link, $type = 'name') {
    switch ($type) {
      case 'url':
        $result = $link == request()->fullUrl();
        break;

      default:
        $result =
          $link ==
          request()
            ->route()
            ->getName();
    }

    return $result;
  }
}

if (!function_exists('current_route_group')) {
  /**
   * Retrieves current route group name.
   *
   * @param int $level
   *
   * @return mixed
   */
  function current_route_group($level = 0) {
    $routeName = Illuminate\Support\Facades\Route::current()->getName();
    $levels = explode('.', $routeName);
    return $levels[$level] ?? $levels[0];
  }
}

if (!function_exists('exists_in_filter_key')) {
  /**
   * Appends passed value if condition is true
   *
   * @param $key
   * @param $value
   * @return null
   */
  function exists_in_filter_key($key, $value = null) {
    return collect(explode('&', $key))->contains($value);
  }
}

if (!function_exists('join_in_filter_key')) {
  /**
   * Appends passed value if condition is true
   *
   * @param $value
   * @return null
   */
  function join_in_filter_key(...$value) {
    //remove empty values
    $value = array_filter($value, function ($item) {
      return isset($item);
    });

    return collect($value)->implode('&');
  }
}

if (!function_exists('remove_from_filter_key')) {
  /**
   * Appends passed value if condition is true
   *
   * @param $key
   * @param $oldValues
   * @param $value
   * @return null
   */
  function remove_from_filter_key($key, $oldValues, $value) {
    $newValues = array_diff(array_values(explode('&', $oldValues)), [
      $value,
      'page'
    ]);

    if (count($newValues) == 0) {
      array_except(request()->query(), [$key, 'page']);

      return null;
    }

    return collect($newValues)->implode('&');
  }
}

if (!function_exists('return_if')) {
  /**
   * Appends passed value if condition is true
   *
   * @param $condition
   * @param $value
   * @return null
   */
  function return_if($condition, $value) {
    if ($condition) {
      return $value;
    }
  }
}

if (!function_exists('fa_icon_from_cc_brand')) {
  /**
   * Gets the proper FontAwesome icon from Stripe-defined CC brand.
   *
   * @see https://stripe.com/docs/api/cards/object#card_object-brand
   * @param $brand
   * @return string
   */
  function fa_icon_from_cc_brand($brand): string {
    $brand = ucwords($brand);
    switch ($brand) {
      case 'American Express':
        return 'fab fa-cc-amex';
        break;
      case 'Diners Club':
        return 'fab fa-cc-diners-club';
        break;
      case 'Discover':
        return 'fab fa-cc-discover';
        break;
      case 'JCB':
        return 'fab fa-cc-jcb';
        break;
      case 'MasterCard':
        return 'fab fa-cc-mastercard';
        break;
      case 'Unknown':
      case 'UnionPay':
        return 'fa fa-credit-card';
        break;
      case 'Visa':
        return 'fab fa-cc-visa';
        break;
      default:
        return 'fa fa-credit-card';
    }
  }
}

if (!function_exists('webpackify')) {
  /**
   * Generates UMD module export JavaScript string of named module and content.
   *
   * @param        $name
   * @param string $content
   * @param bool   $shouldCompress
   *
   * @return string
   */
  function webpackify($name, $content = '', $shouldCompress = true) {
    if ($shouldCompress) {
      $content = LZString::compressToBase64($content);
    }
    return "!function(e,t){'object'==typeof exports&&'object'==typeof module?module.exports=t():'function'==typeof define&&define.amd?define([],t):'object'==typeof exports?exports['{$name}']=t():e['{$name}']=t()}('undefined'!=typeof self?self:this,function(){return '{$content}'});";
  }
}

if (!function_exists('cents_to_decimal')) {
  function cents_to_decimal($amount) {
    if (is_numeric($amount) && !is_float($amount) && is_int($amount)) {
      return number_format($amount / 100, 2);
    } else {
      throw new Exception(
        "Amount $amount not valid integer; cannot be converted to decimal."
      );
    }
  }
}

if (!function_exists('decimal_to_cents')) {
  function decimal_to_cents($amount) {
    if (preg_match('/^\d+\.(\d{2})$/', $amount)) {
      return $amount * 100;
    } else {
      throw new Exception(
        "Amount $amount invalid decimal; cannot be converted to cents."
      );
    }
  }
}

if (!function_exists('get_domain')) {
  function get_domain($url) {
    return parse_url($url, PHP_URL_HOST) ? parse_url($url, PHP_URL_HOST) : $url;
  }
}
