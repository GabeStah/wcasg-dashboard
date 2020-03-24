<?php

namespace CreatyDev\Domain\Statements\Models;

use CreatyDev\Domain\Sites\Models\Site;
use CreatyDev\Solarix\Cashier\Subscription;
use ErrorException;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * CreatyDev\Domain\Statements\Models\Statement
 *
 * @property int $id
 * @property string $content
 * @property array|null $config
 * @property int $statement_template_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property \Illuminate\Database\Eloquent\Collection|\CreatyDev\Domain\Sites\Models\Site[] $sites
 * @property-read int|null $sites_count
 * @property-read \CreatyDev\Domain\Statements\Models\StatementTemplate $statementTemplate
 * @property-read \Illuminate\Database\Eloquent\Collection|\CreatyDev\Solarix\Cashier\Subscription[] $subscriptions
 * @property-read int|null $subscriptions_count
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Statements\Models\Statement newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Statements\Models\Statement newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Statements\Models\Statement query()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Statements\Models\Statement whereConfig($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Statements\Models\Statement whereContent($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Statements\Models\Statement whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Statements\Models\Statement whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Statements\Models\Statement whereStatementTemplateId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Statements\Models\Statement whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Statement extends Model {
  /**
   * The attributes that should be cast to native types.
   *
   * @var array
   */
  protected $casts = [
    'config' => 'array'
  ];

  protected $fillable = ['config', 'statement_template_id'];

  public function getContentAttribute() {
    return $this->statementTemplate->content;
  }

  public function render(
    Site $site = null,
    StatementTemplate $template = null
  ) {
    return $this->view($site, $template)->render();
  }

  public function setSitesAttribute(Site $site) {
    $this->sites()->save($site);
  }

  /**
   * Get sites using this statement.
   *
   * @return HasMany
   */
  public function sites() {
    return $this->hasMany(Site::class);
  }

  public function statementTemplate() {
    return $this->belongsTo(StatementTemplate::class, 'statement_template_id');
  }

  public function subscriptions() {
    return $this->hasManyThrough(
      Subscription::class,
      Site::class,
      'statement_id', // Foreign on Site
      'id', // Foreign on Sub
      'id', // local on this (Statement)
      'subscription_id' // local on Site
    )->orderBy('subscriptions.updated_at', 'desc');
  }

  protected function view(
    Site $site = null,
    StatementTemplate $template = null
  ) {
    // Default to first Site
    if (!$site) {
      $site = $this->sites->first();
    }

    $content = $this->content;

    if ($template) {
      $content = $template->content;
    }

    $timestamp =
      $this->updated_at > $this->statementTemplate->updated_at
        ? $this->updated_at
        : $this->statementTemplate->updated_at;

    $replacements = [
      'app' => '',
      'config' => $this->config,
      'site' => $site ? $site : [],
      'subscription' => $site ? $site->subscription : [],
      'timestamp' => $timestamp,
      'user' => $site ? $site->user() : []
    ];

    // Replace all Blades
    $content = preg_replace("~{{\r*\s*\n*(.+?)\r*\s*\n*}}~", '', $content);
    $content = preg_replace_callback(
      "~{%\r*\s*\n*(.+?)\r*\s*\n*%}~",
      function ($matches) use ($replacements) {
        try {
          $match = $matches[1];
          // BaseException object
          if (strpos($match, '[') === false) {
            return $replacements[$match];
          }
          // Get object name and key
          foreach ($replacements as $key => $object) {
            $success = preg_match("~{$key}\['(.+?)']~", $match, $innerMatches);
            if ($success) {
              if ($key === 'app') {
                return config($innerMatches[1]);
              } else {
                if ($object[$innerMatches[1]] === false) {
                  return 'false';
                } elseif ($object[$innerMatches[1]] === true) {
                  return 'true';
                }
                return $object[$innerMatches[1]];
              }
            }
          }
          return '';
        } catch (ErrorException $e) {
          // Ignore mismatches, assume poor configuration.
          if (strpos($e->getMessage(), 'Undefined index')) {
            return '';
          }
        }
        return '';
      },
      $content
    );

    // True: Check truthy value.
    // False: Check falsy value.
    // Null: Discard
    $directives = [
      'if' => true,
      'unless' => false,
      'isset' => true,
      'empty' => false,
      'php' => null,
      'for' => null,
      'foreach' => null,
      'forelse' => null,
      'while' => null
    ];

    // Replace dangerous Blade directives
    foreach ($directives as $directive => $check) {
      // override directives
      $content = preg_replace_callback(
        "~@{$directive}\((.+?)\)\r*\s*\n*(.+?)\r*\s*\n*@end{$directive}~s",
        function ($matches) use ($check) {
          try {
            $value = $matches[1];
            if ($value === 'true') {
              $value = true;
            } elseif ($value === 'false') {
              $value = false;
            }
            $insert = $matches[2];
            if ($check === null) {
              return '';
            } elseif (($check && $value) || (!$check && !$value)) {
              return $insert;
            }
            return '';
          } catch (ErrorException $e) {
            // Ignore mismatches, assume poor configuration.
            if (strpos($e->getMessage(), 'Undefined index')) {
              return '';
            }
          }
          return '';
        },
        $content
      );
    }

    return view(['template' => $content]);
  }

  /**
   * @return StatementTemplate
   */
  public function template() {
    return $this->statementTemplate;
  }
}
