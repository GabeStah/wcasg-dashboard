<?php

namespace CreatyDev\Domain\Statements\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class StatementTemplate extends Model {
  protected $fillable = ['content'];

  public function render() {
    return $this->view()->render();
  }

  /**
   * Get all Statements using this template.
   *
   * @return HasMany
   */
  public function statements() {
    return $this->hasMany(Statement::class);
  }

  public function view() {
    return view(['template' => $this->content]);
  }
}
