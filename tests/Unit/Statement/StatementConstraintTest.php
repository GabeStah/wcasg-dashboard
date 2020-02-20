<?php

namespace Tests\Unit\Statement;

use Mockery as m;
use Tests\ResetDatabase;
use Tests\TestCase;

class StatementConstraintTest extends TestCase {
  //  use ResetDatabase;

  protected function tearDown(): void {
    m::close();
  }

  public function testPlaceholder() {
    $this->assertTrue(true);
  }
}
