<?php

namespace CreatyDev\Domain\Audits\Listeners;

use CreatyDev\Domain\Audits\Events\AuditTaskCreated;

class ExecuteAudit {
  /**
   * Create the event listener.
   *
   * @return void
   */
  public function __construct() {
    //
  }

  /**
   * Handle the event.
   *
   * @param AuditTaskCreated $event
   *
   * @return void
   */
  public function handle(AuditTaskCreated $event) {
  }
}
