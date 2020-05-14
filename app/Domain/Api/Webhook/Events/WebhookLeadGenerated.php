<?php

namespace CreatyDev\Domain\Api\Webhook\Events;

use CreatyDev\Domain\Leads\Models\Lead;
use CreatyDev\Domain\Subscriptions\Models\Plan;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class WebhookLeadGenerated {
  use Dispatchable, InteractsWithSockets, SerializesModels;

  /**
   * @var Lead
   */
  public $lead;
  /**
   * @var Plan
   */
  public $plan;

  public function __construct(Lead $lead, Plan $plan) {
    $this->lead = $lead;
    $this->plan = $plan;
  }
}
