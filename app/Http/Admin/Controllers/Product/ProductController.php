<?php

namespace CreatyDev\Http\Admin\Controllers\Product;

use CreatyDev\App\Controllers\Controller;
use Illuminate\Http\Request;
use Stripe;

class ProductController extends Controller {
  public function __construct() {
    Stripe\Stripe::setApiKey(config('services.stripe.secret'));
  }

  public function index(Request $request) {
    $this->authorize('manage', 'product');

    try {
      $products = Stripe\Product::all(['limit' => 10]);

      return view('admin.products.index', compact('products'));
      //      }
    } catch (Stripe\Error\Api $e) {
      return json_decode($e, false);
    }
  }

  public function create(Request $request) {
    $this->authorize('manage', 'product');

    try {
      $rows = [
        [
          'field' => 'name',
          'title' => 'Name*',
          'required' => true
        ],
        [
          'field' => 'unit_label',
          'title' => 'Unit Label*',
          'required' => true,
          'info_text' => __('admin.product.unit_label')
        ],
        [
          'field' => 'description',
          'title' => 'Description'
        ],
        [
          'field' => 'statement_descriptor',
          'title' => 'Statement Descriptor',
          'info_text' => __('admin.product.statement_descriptor')
        ]
      ];

      return view('admin.products.create', compact('rows'));
    } catch (Stripe\Error\Api $e) {
      return json_decode($e, false);
    }
  }

  public function edit($id) {
    $this->authorize('manage', 'product');

    try {
      $product = Stripe\Product::retrieve($id);

      $rows = [
        [
          'field' => 'name',
          'title' => 'Name*',
          'required' => true
        ],
        [
          'field' => 'unit_label',
          'title' => 'Unit Label*',
          'required' => true,
          'info_text' => __('admin.product.unit_label')
        ],
        [
          'field' => 'description',
          'title' => 'Description'
        ],
        [
          'field' => 'statement_descriptor',
          'title' => 'Statement Descriptor',
          'info_text' => __('admin.product.statement_descriptor')
        ]
      ];

      return view('admin.products.edit', [
        'rows' => $rows,
        'product' => $product
      ]);
    } catch (Stripe\Error\Api $e) {
      return json_decode($e, false);
    }
  }

  public function store(Request $request) {
    $this->authorize('manage', 'product');

    try {
      $params = $request->validate([
        'name' => 'required|max:100',
        'unit_label' => 'required|max:100',
        'statement_descriptor' => 'max:22',
        'description' => 'max:255'
      ]);

      Stripe\Product::create($params);

      $products = Stripe\Product::all();

      return view('admin.products.index', compact('products'))->with(
        'success',
        'Your product has been created.'
      );
    } catch (Stripe\Error\Api $e) {
      return json_decode($e, false);
    }
  }

  public function update(Request $request, $id) {
    $this->authorize('manage', 'product');

    try {
      $params = $request->validate([
        'name' => 'required|max:100',
        'unit_label' => 'required|max:100',
        'statement_descriptor' => 'max:22',
        'description' => 'max:255'
      ]);

      if (!$params['statement_descriptor']) {
        $params['statement_descriptor'] = '';
      }

      if (!$params['description']) {
        $params['description'] = '';
      }

      Stripe\Product::update($id, $params);

      $products = Stripe\Product::all();

      return redirect()
        ->route('admin.products.index', compact('products'))
        ->with('success', 'Your product has been updated.');
    } catch (Stripe\Error\Api $e) {
      return json_decode($e, false);
    }
  }
}
