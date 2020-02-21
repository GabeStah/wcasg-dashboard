<?php

namespace Tests\Unit\Statement;

use CreatyDev\Domain\Sites\Models\Site;
use CreatyDev\Domain\Statements\Models\StatementTemplate;
use CreatyDev\Solarix\Cashier\Subscription;
use Mockery as m;
use Tests\ResetDatabase;
use Tests\TestCase;

class StatementTemplateConstraintTest extends TestCase {
  use ResetDatabase;

  protected function tearDown(): void {
    m::close();
  }

  public function testCannotDeleteInUseTemplate() {
    $site = factory(Site::class)->create([
      'subscription_id' => factory(Subscription::class, 'complete')->make()->id
    ]);
    $statement = $site->statement;
    $template = $statement->template();

    $this->assertNotNull($template);
    $this->expectException('Illuminate\Database\QueryException');
    $template->delete();
  }

  public function testCanDeleteUnusedTemplate() {
    $template = factory(StatementTemplate::class)->create();

    $this->assertNotNull($template);

    $this->assertTrue($template->delete());
  }
}
