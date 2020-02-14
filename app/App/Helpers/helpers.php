<?php
/**
 * Created by PhpStorm.
 * User: CreatyDev
 * Date: 12/29/2017
 * Time: 1:30 AM
 */

if (!function_exists('on_page')) {
  /**
   * Check's whether request url/route matches passed link
   *
   * @param $link
   * @param string $type
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
    switch ($brand) {
      case 'American Express':
        return 'cc-amex';
        break;
      case 'Diners Club':
        return 'cc-diners-club';
        break;
      case 'Discover':
        return 'cc-discover';
        break;
      case 'JCB':
        return 'cc-jcb';
        break;
      case 'MasterCard':
        return 'cc-mastercard';
        break;
      case 'Unknown':
      case 'UnionPay':
        return 'credit-card';
        break;
      case 'Visa':
        return 'cc-visa';
        break;
      default:
        return 'credit-card';
    }
  }
}
