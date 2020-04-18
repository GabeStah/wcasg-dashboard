<?php

namespace CreatyDev\Domain\Leads\Mail;

use CreatyDev\App\Pa11y\Pa11y;
use CreatyDev\Domain\Audits\Models\Audit;
use CreatyDev\Domain\Leads\Models\Lead;
use Illuminate\Bus\Queueable;
//use Illuminate\Mail\Mailable;
use Asahasrabuddhe\LaravelMJML\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
//use HTMLMin\HTMLMin\Facades\HTMLMin;

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
    $this->audit = $audit;
    $this->lead = $lead;
  }

  /**
   * Build the message.
   *
   * @param Pa11y $pa11y
   * @return $this
   */
  public function build(Pa11y $pa11y) {
    $results = $pa11y->getTaskAllResults($this->audit->task_id);

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

    foreach ($results->results as $result) {
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

    // The MJML conversion includes abundant extra characters that throw error from html2text parser used internally by
    // Laravel.  This line explicitly disables those errors for this single conversion process.
    $internalErrors = libxml_use_internal_errors(true);

    $mjml = $this->mjml('emails.lead.lead', [
      'audit' => $this->audit,
      'lead' => $data,
      'results' => $results->results,
      'stats' => $stats
    ]);

    // Minify
    // TODO: Currently seemingly does nothing
    //    $mjml->html(HTMLMin::html($mjml->html));

    return $mjml;
  }
}
