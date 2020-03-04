<?php
namespace Tests;
use Illuminate\Support\Facades\Artisan;
trait ResetDatabase {
  /**
   * If true, setup has run at least once.
   * @var boolean
   */
  protected static $setUpHasRunOnce = false;

  /**
   * Perform deletion, migration, and seed on first setUp call only.
   *
   * @return void
   */
  public function setUp(): void {
    parent::setUp();
    if (!static::$setUpHasRunOnce) {
      Artisan::call('migrate:fresh --seed');
      static::$setUpHasRunOnce = true;
    }
  }
}
