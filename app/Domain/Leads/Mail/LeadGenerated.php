<?php

namespace CreatyDev\Domain\Leads\Mail;

use CreatyDev\App\Pa11y\Pa11y;
use CreatyDev\Domain\Audits\Models\Audit;
use CreatyDev\Domain\Leads\Models\Lead;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
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

    return $this->view('emails.lead.generated', [
      'audit' => $this->audit,
      'lead' => $data,
      'results' => $results->results
    ]);
  }
}
