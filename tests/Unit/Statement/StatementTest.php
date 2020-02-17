<?php

namespace Tests\Unit\Statement;

use CreatyDev\Domain\Sites\Models\Site;
use CreatyDev\Domain\Statements\Models\Statement;
use CreatyDev\Domain\Statements\Models\StatementTemplate;
use CreatyDev\Domain\Users\Models\User;
use CreatyDev\Solarix\Cashier\Subscription;
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

  public function testStatementWithBasicConfig() {
    $template = factory(StatementTemplate::class)->create([
      'content' => app('files')->get(__DIR__ . './templates/basic.html')
    ]);

    $statement = new Statement([
      'config' => ['user' => ['name' => 'Bob Smith']],
      'statement_template_id' => $template->id
    ]);
    $statement->save();
    $content = $statement->content;
    $renderContent = $statement->render();

    $this->assertNotEquals($content, $renderContent);
    $this->assertStringContainsString(
      '<title>Hello Bob Smith</title>',
      $renderContent
    );
  }

  public function testStatementWithAdvancedConfig() {
    $template = factory(StatementTemplate::class)->create([
      'content' => app('files')->get(__DIR__ . './templates/advanced.html')
    ]);

    $site = Site::first();

    $statement = new Statement([
      'config' => ['user' => ['username' => 'Bob Smith']],
      'statement_template_id' => $template->id
    ]);
    $statement->save();
    $statement->site = $site;
    $content = $statement->content;
    $renderContent = $statement->render();

    $this->assertNotEquals($content, $renderContent);
    $this->assertStringContainsString(
      '<title>Hello Bob Smith</title>',
      $renderContent
    );
  }

  public function testStatementHasSubscriptions() {
    $template = factory(StatementTemplate::class)->create([
      'content' => app('files')->get(__DIR__ . './templates/plain.html')
    ]);

    $site = Site::first();

    $statement = new Statement([
      'config' => ['user' => ['name' => 'Bob Smith']],
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
      'config' => ['user' => ['username' => $user->username]],
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
      'config' => ['user' => $user],
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
    $renderContent = $statement->render();

    $this->assertNotEquals($content, $renderContent);
    $this->assertStringContainsString(
      "<title>Hello {$user->username}</title>",
      $renderContent
    );
  }
}
