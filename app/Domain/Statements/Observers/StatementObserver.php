<?php

namespace CreatyDev\Domain\Statements\Observers;

use CreatyDev\Domain\Statements\Models\Statement;
use CreatyDev\Domain\Statements\Models\StatementTemplate;

class StatementObserver {
  /**
   * Set default values.
   *
   * @param Statement $statement
   *
   * @return Statement
   */
  private function setDefaults(Statement $statement) {
    $template = $statement->statementTemplate;
    // Set statementTemplate, if needed.
    if (!$template) {
      $template = StatementTemplate::getDefault();
      $statement->statement_template_id = $template->id;
    }

    // Set config, if needed.
    if (!isset($statement->config)) {
      $statement->config = $template->default_config;
    }

    return $statement;
  }

  /**
   * Business logic before Statement created.
   *
   * @param Statement $statement
   *
   * @return Statement
   */
  public function creating(Statement $statement) {
    return $this->setDefaults($statement);
  }

  /**
   * Business logic before Statement updated.
   *
   * @param Statement $statement
   *
   * @return Statement
   */
  public function updating(Statement $statement) {
    return $this->setDefaults($statement);
  }
}
