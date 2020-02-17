<?php

namespace CreatyDev\Domain\Statements\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Statement
 *
 * TODO: Service / trait for statement ot rely on Template
 * @see https://laracasts.com/series/laravel-6-from-scratch/episodes/39?autoplay=true
 *
 * @package CreatyDev\Domain\Statements\Models
 */
class Statement extends Model {
  protected $fillable = ['config', 'content', 'statement_template_id'];

  public function __construct(
    StatementTemplate $template,
    array $attributes = []
  ) {
    parent::__construct($attributes);

    $this->template = $template;

    //    $this->getContent();

    // Fallback for missing relationship
    if (
      !isset($attributes['content']) &&
      isset($attributes['statement_template_id'])
    ) {
      $this->content = StatementTemplate::find(
        $attributes['statement_template_id']
      )->render();
    }
  }

  public function getContentAttribute() {
    if (!isset($this->content)) {
      //      $this->load('statement_template');
      $this->content = $this->template->render();
    }
    return $this->content;
  }

  //  public function setContentAttribute($value) {
  //    $this->content = $value;
  //  }

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
