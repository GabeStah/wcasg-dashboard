<?php

namespace Tests\Unit\Statement;

use CreatyDev\Domain\Sites\Models\Site;
use CreatyDev\Domain\Statements\Models\Statement;
use CreatyDev\Domain\Statements\Models\StatementTemplate;
use CreatyDev\Domain\Users\Models\User;
use CreatyDev\Solarix\Cashier\Subscription;
use ErrorException;
use Illuminate\Support\Facades\DB;
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
    $template = factory(StatementTemplate::class)->create([
      'content' => app('files')->get(__DIR__ . './templates/plain.html')
    ]);
    $templateContent = $template->content;

    $statement = new Statement([
      'statement_template_id' => $template->id
    ]);
    $statement->save();

    $this->assertEquals($statement->content, $templateContent);
  }

  public function testStatementWithoutSite() {
    $template = factory(StatementTemplate::class)->create([
      'content' => app('files')->get(__DIR__ . './templates/basic.html')
    ]);

    $statement = new Statement([
      'statement_template_id' => $template->id
    ]);
    $statement->save();
    $this->expectException(ErrorException::class);
    $this->expectExceptionMessage('Undefined index: first_name');
    $statement->render();
  }

  public function testStatementWithAdvancedConfig() {
    $template = factory(StatementTemplate::class)->create([
      'content' => app('files')->get(__DIR__ . './templates/advanced.html')
    ]);

    $site = Site::first();

    $statement = new Statement([
      'statement_template_id' => $template->id
    ]);
    $statement->save();
    $statement->site = $site;
    $content = $statement->content;
    $renderContent = $statement->render($site);

    $this->assertNotEquals($content, $renderContent);
    $this->assertStringContainsString(
      "<title>Hello {$site->user()->first_name} {$site->user()->last_name}</title>",
      $renderContent
    );
  }

  public function testStatementHasSubscriptions() {
    $template = factory(StatementTemplate::class)->create([
      'content' => app('files')->get(__DIR__ . './templates/plain.html')
    ]);

    $site = Site::first();

    $statement = new Statement([
      'statement_template_id' => $template->id
    ]);
    DB::enableQueryLog();
    $statement->save();
    $statement->sites = $site;
    $subscriptions = $statement->subscriptions;
    $this->assertNotNull($subscriptions->first());
    $this->assertInstanceOf(Subscription::class, $subscriptions->first());
  }

  public function testUserHasStatements() {
    $subscription = factory(Subscription::class, 'complete')->make();
    $user = $subscription->user;

    // Initial
    $this->assertEmpty($user->statements);

    $template = factory(StatementTemplate::class)->create([
      'content' => app('files')->get(__DIR__ . './templates/plain.html')
    ]);

    $statement = new Statement([
      'statement_template_id' => $template->id
    ]);

    $statement->save();

    $site = factory(Site::class)->create([
      'subscription_id' => $subscription->id,
      'statement_id' => $statement->id
    ]);

    $this->assertNotEmpty($user->statements);
    $this->assertInstanceOf(Statement::class, $user->statements->first());
  }

  public function testUserInjectedData() {
    $subscription = factory(Subscription::class, 'complete')->make();
    $user = $subscription->user;

    // Initial
    $this->assertEmpty($user->statements);

    $template = factory(StatementTemplate::class)->create([
      'content' => app('files')->get(__DIR__ . './templates/advanced.html')
    ]);

    $statement = new Statement([
      'statement_template_id' => $template->id
    ]);

    $statement->save();

    $site = factory(Site::class)->create([
      'subscription_id' => $subscription->id,
      'statement_id' => $statement->id
    ]);

    //    $statement->sites = $site;
    $this->assertNotEmpty($user->statements);
    $this->assertInstanceOf(Statement::class, $user->statements->first());

    $content = $statement->content;
    $renderContent = $statement->render($site);

    $this->assertNotEquals($content, $renderContent);
    $this->assertStringContainsString(
      "<title>Hello {$user->first_name} {$user->last_name}</title>",
      $renderContent
    );
  }

  public function testIssetDirective() {
    $subscription = factory(Subscription::class, 'complete')->make();
    $user = $subscription->user;

    // Initial
    $this->assertEmpty($user->statements);

    $template = factory(StatementTemplate::class)->create([
      'content' => app('files')->get(__DIR__ . './templates/directive.html')
    ]);

    $statement = new Statement([
      'config' => ['valid' => true],
      'statement_template_id' => $template->id
    ]);

    $statement->save();

    $site = factory(Site::class)->create([
      'subscription_id' => $subscription->id,
      'statement_id' => $statement->id
    ]);

    $this->assertNotEmpty($user->statements);
    $this->assertInstanceOf(Statement::class, $user->statements->first());

    $content = $statement->content;
    $renderContent = $statement->render($site);

    $this->assertStringContainsString(
      '<p>Valid directive text.</p>',
      $renderContent
    );

    $this->assertStringNotContainsString(
      '<p>Invalid directive text.</p>',
      $renderContent
    );
  }
}
