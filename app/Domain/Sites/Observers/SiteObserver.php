<?php

namespace CreatyDev\Domain\Sites\Observers;

use Carbon\Carbon;
use CreatyDev\Domain\Extensions\Models\Extension;
use CreatyDev\Domain\Sites\Models\Site;
use CreatyDev\Domain\Statements\Models\Statement;

class SiteObserver {
  /**
   * Add built-in extensions.
   *
   * @param Site $site
   *
   * @return Site
   */
  private function addExtensions(Site $site) {
    // Add all imported extensions
    $importedExtensions = Extension::imported()->get();
    foreach ($importedExtensions as $extension) {
      $site
        ->extensions()
        ->attach($extension->id, ['enabled_at' => Carbon::now()]);
    }

    return $site;
  }

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

  /**
   * Business logic after Site created.
   *
   * @param Site $site
   *
   * @return Site
   */
  public function created(Site $site) {
    // Extensions
    $site = $this->addExtensions($site);

    $site->save();

    return $site;
  }
}
