<?php

namespace Tests\Feature\Statement;

use CreatyDev\Domain\Sites\Models\Site;
use CreatyDev\Domain\Statements\Models\StatementTemplate;
use CreatyDev\Http\Admin\Controllers\Statement\StatementTemplateController;
use CreatyDev\Solarix\Cashier\Subscription;
use Tests\ResetDatabase;
use Tests\TestCase;

class StatementTemplateTest extends TestCase {
  use ResetDatabase;

  public function testTryingToDestroyInUseTemplate() {
    $site = factory(Site::class)->create([
      'subscription_id' => factory(Subscription::class, 'complete')->make()->id
    ]);
    $statement = $site->statement;
    $template = $statement->template();
    $this->assertNotNull($template);

    $controller = new StatementTemplateController();
    $response = $controller->destroy($template->id);

    $this->assertNotNull($response->getSession()->has('error'));
    $this->assertEquals(
      __('controller.admin.StatementTemplate.destroy.fail.in-use'),
      $response->getSession()->get('error')
    );

    // Template still exists in db.
    $this->assertNotNull(StatementTemplate::find($template->id));
  }

  public function testTryingToDestroyNotInUseTemplate() {
    $template = factory(StatementTemplate::class)->create();

    $this->assertNotNull($template);

    $controller = new StatementTemplateController();
    $response = $controller->destroy($template->id);

    $this->assertNotNull($response->getSession()->has('success'));
    $this->assertEquals(
      __('controller.admin.StatementTemplate.destroy.success'),
      $response->getSession()->get('success')
    );

    // Template no longer in db.
    $this->assertNull(StatementTemplate::find($template->id));
  }
}
