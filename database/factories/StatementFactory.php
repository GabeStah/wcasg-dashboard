<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use CreatyDev\Domain\Statements\Models\Statement;
use Faker\Generator as Faker;
use Wpb\String_Blade_Compiler\Facades\StringBlade;
use Wpb\String_Blade_Compiler\Factory;
use Wpb\String_Blade_Compiler\StringView;

$factory->define(Statement::class, function (Faker $faker) {
  $template = factory(
    \CreatyDev\Domain\Statements\Models\StatementTemplate::class
  )->create();

  //  Factory::make($template->content)

  //  StringBlade::getFacadeAccessor();

  //  $view = view($template->content)->render();
  //
  //  $parsedContent = Factory::make($template->content)->render();
  //  $parsedContent = StringView::make($template->content)->render();

  //  view(      [
  //    'template' =>
  //      $template->content
  //  ]);

  return [
    //    'content' => view([
    //      'template' => $template->content
    //    ])->render(),
    'statement_template_id' => $template->id
  ];
});
