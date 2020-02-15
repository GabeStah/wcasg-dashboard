<?php

namespace Tests\Unit\Statement;

use CreatyDev\Domain\Statements\Models\Statement;
use CreatyDev\Domain\Statements\Models\StatementTemplate;
use CreatyDev\Domain\Users\Models\User;
use Mockery as m;
use Tests\ResetDatabase;
use Tests\TestCase;

class StatementTest extends TestCase {
  use ResetDatabase;

  protected function tearDown(): void {
    m::close();
  }

  public function testViewReplacementFunctional() {
    $view = view(
      [
        'template' => '{{ $field }}'
      ],
      ['field' => 'field value']
    );

    $this->assertEquals('field value', $view->render());
  }

  public function testInlineDataInjection() {
    $view = view([
      'template' =>
        '{{ CreatyDev\Domain\Users\Models\User::find(1)->first_name }}'
    ]);

    $this->assertEquals(User::find(1)->first_name, $view->render());
  }

  public function testStatementAndTemplateContentEqual() {
    $template = factory(StatementTemplate::class)->create();
    $templateContent = $template->content;
    //    $content = factory(Statement::class)->make(['content' => $templateContent])
    //      ->content;
    $content = factory(Statement::class)->create([
      'statement_template_id' => $template->id
    ])->content;
    $this->assertEquals($content, $templateContent);
  }
}
