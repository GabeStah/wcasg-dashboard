<?php

namespace CreatyDev\Domain\Sites\Observers;

use CreatyDev\Domain\Sites\Models\Site;
use CreatyDev\Domain\Statements\Models\Statement;

class SiteObserver {
  /**
   * Add Site accessibility Statement.
   *
   * @param Site $site
   *
   * @return Site
   */
  private function addStatement(Site $site) {
    if (!$site->statement) {
      // Assign Statement
      $statement = Statement::create();
      $statement->save();

      $site->statement_id = $statement->id;
    }

    return $site;
  }

  /**
   * Business logic before Site created.
   *
   * @param Site $site
   *
   * @return Site
   */
  public function creating(Site $site) {
    // Statement
    $site = $this->addStatement($site);

    return $site;
  }
}
