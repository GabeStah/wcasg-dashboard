<?php

namespace Tests\Unit\Extension;

use CreatyDev\Domain\Extensions\Models\Action;
use CreatyDev\Domain\Extensions\Models\Predicate;
use CreatyDev\Domain\Extensions\Models\Extension;
use Tests\TestCase;
use Throwable;

class ExtensionTest extends TestCase {
  /**
   * If true, setup has run at least once.
   * @var boolean
   */
  protected static $setUpHasRunOnce = false;

  /**
   * @var Extension
   */
  public $extension;
  /**
   * @var Action
   */
  private $action;
  /**
   * @var Predicate
   */
  private $predicate;

  /**
   * This method is called before each test.
   */
  protected function setUp(): void {
    parent::setUp();

    //    if (!static::$setUpHasRunOnce) {
    //      Artisan::call('migrate:fresh --seed');
    //      static::$setUpHasRunOnce = true;
    //    }

    $this->extension = factory(Extension::class)->create();
    $this->action = factory(Action::class)->create();
    $this->extension->actions()->save($this->action);
    $this->predicate = factory(Predicate::class)->create();
    $this->extension->predicates()->save($this->predicate);
  }

  /**
   * This method is called after each test.
   *
   * @throws Throwable
   */
  protected function tearDown(): void {
    parent::tearDown();
    $this->extension->delete();
  }

  public function testPlaceholder() {
    $this->assertEquals('field', 'field');
  }
}
