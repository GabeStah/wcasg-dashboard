<?php

namespace CreatyDev\Http\Statement\Controllers;

use CreatyDev\App\Controllers\Controller;
use CreatyDev\Domain\Statements\Models\Statement;
use Illuminate\Http\Request;

class StatementController extends Controller {
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
   */
  public function index() {
    return view(
      [
        'template' =>
          '<p>{{ $token }}</p><h2>{{ CreatyDev\Domain\Users\Models\User::find(1)->first_name }}</h2>'
      ],
      ['token' => 'I am the child template']
    );
  }

  /**
   * Show the form for creating a new resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function create() {
    //
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request) {
  }

  /**
   * Display the specified resource.
   *
   * @param  \CreatyDev\Domain\Statement  $statement
   * @return \Illuminate\Http\Response
   */
  public function show(Statement $statement) {
    //
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param  \CreatyDev\Domain\Statement  $statement
   * @return \Illuminate\Http\Response
   */
  public function edit(Statement $statement) {
    //
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \CreatyDev\Domain\Statement  $statement
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Statement $statement) {
    //
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \CreatyDev\Domain\Statement  $statement
   * @return \Illuminate\Http\Response
   */
  public function destroy(Statement $statement) {
    //
  }
}
