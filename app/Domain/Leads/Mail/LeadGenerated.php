<?php

namespace CreatyDev\Domain\Leads\Mail;

use CreatyDev\App\Pa11y\Pa11y;
use CreatyDev\Domain\Audits\Models\Audit;
use CreatyDev\Domain\Leads\Models\Lead;
use CreatyDev\Solarix\Mail\Mailable;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;

class LeadGenerated extends Mailable {
  use Queueable, SerializesModels;

  /**
   * @var Audit
   */
  protected $audit;

  /**
   * @var Lead
   */
  protected $lead;

  /**
   * Create a new message instance.
   *
   * @param Audit $audit
   * @param Lead $lead
   */
  public function __construct(Audit $audit, Lead $lead) {
    parent::__construct();
    $this->audit = $audit;
    $this->lead = $lead;
    $this->subject('Website Audit Report for ' . get_domain($this->lead->url));
  }

  /**
   * Build the message.
   *
   * @param Pa11y $pa11y
   * @return $this
   */
  public function build(Pa11y $pa11y) {
    $MAX_RESULTS = 6;
    $resultData = $pa11y->getTaskAllResults($this->audit->task_id);
    $results = $resultData->results;

    $data = [
      'url' => $this->lead->url,
      'first_name' => $this->lead->first_name,
      'last_name' => $this->lead->last_name,
      'company_name' => $this->lead->company_name,
      'address1' => $this->lead->address1,
      'address2' => $this->lead->address2,
      'city' => $this->lead->city,
      'state' => $this->lead->state,
      'postal_code' => $this->lead->postal_code
    ];

    $errors = [];
    $notices = [];
    $warnings = [];

    foreach ($results as $result) {
      if ($result->type) {
        switch ($result->type) {
          case 'notice':
            array_push($notices, $result);
            break;
          case 'error':
            array_push($errors, $result);
            break;
          case 'warning':
            array_push($warnings, $result);
            break;
          default:
        }
      }
    }

    $stats = (object) [
      'errors' => count($errors),
      'notices' => count($notices),
      'warnings' => count($warnings)
    ];

    $resultOrder = ['error' => 0, 'warning' => 1, 'notice' => 2];

    uksort($results, function ($a, $b) use ($results, $resultOrder) {
      if (isset($results[$a]->type) && isset($results[$b]->type)) {
        return $resultOrder[$results[$a]->type] -
          $resultOrder[$results[$b]->type];
      }
    });

    $mjml = $this->mjml('emails.lead.created', [
      'audit' => $this->audit,
      'domain' => get_domain($this->lead->url),
      'hero_title' => get_domain($this->lead->url),
      'hero_text' => 'Website Audit Report',
      'lead' => $data,
      'max_results' => $MAX_RESULTS,
      'results' => $results,
      'stats' => $stats
    ]);

    return $mjml;
  }
}
