<?php

namespace CreatyDev\Domain\Statements\Models;

use Illuminate\Database\Eloquent\Model;

class Statement extends Model {
  protected $fillable = ['config'];

  public function __construct(array $attributes = []) {
    parent::__construct($attributes);

    if (
      !isset($attributes['content']) &&
      isset($attributes['statement_template_id'])
    ) {
      $this->content = StatementTemplate::find(
        $attributes['statement_template_id']
      )->render();
    }
  }

  public function setContent($value) {
    dd($value);
  }

  public function getContent() {
    if (!isset($this->content)) {
      $this->content = $this->template()->render();
    }
    return $this->content;
  }

  public function render() {
    return $this->view()->render();
  }

  public function template() {
    return $this->belongsTo(StatementTemplate::class)->first();
  }

  public function view() {
    return view(['template' => $this->content, compact($this->config)]);
  }
}
