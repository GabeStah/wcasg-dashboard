<?php

namespace CreatyDev\Domain\Statements\Observers;

use CreatyDev\Domain\Statements\Models\StatementTemplate;
use Illuminate\Contracts\Filesystem\FileNotFoundException;

class StatementTemplateObserver {
  /**
   * Assign default values.
   *
   * @param StatementTemplate $statementTemplate
   *
   * @return StatementTemplate
   * @throws FileNotFoundException
   */
  private function setDefaults(StatementTemplate $statementTemplate) {
    if (!isset($statementTemplate->content)) {
      // Default content template.
      $statementTemplate->content = app('files')->get(
        resource_path('assets/templates/default.html')
      );
      $statementTemplate->name = 'Default';
    }

    return $statementTemplate;
  }

  /**
   * Business logic before StatementTemplate created.
   *
   * @param StatementTemplate $statementTemplate
   *
   * @return StatementTemplate
   * @throws FileNotFoundException
   */
  public function creating(StatementTemplate $statementTemplate) {
    return $this->setDefaults($statementTemplate);
  }

  /**
   * Business logic before StatementTemplate created.
   *
   * @param StatementTemplate $statementTemplate
   *
   * @return StatementTemplate
   * @throws FileNotFoundException
   */
  public function updating(StatementTemplate $statementTemplate) {
    return $this->setDefaults($statementTemplate);
  }
}
