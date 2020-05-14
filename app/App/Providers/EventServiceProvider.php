<?php

namespace CreatyDev\App\Providers;

use CreatyDev\Domain\Api\Webhook\Events\WebhookLeadGenerated;
use CreatyDev\Domain\Api\Webhook\Listeners\WebhookLeadGeneratedListener;
use CreatyDev\Domain\Audits\Events\AuditCompleted;
use CreatyDev\Domain\Audits\Events\AuditTaskCreated;
use CreatyDev\Domain\Audits\Listeners\ExecuteAudit;
use CreatyDev\Domain\Audits\Listeners\GenerateLead;
use CreatyDev\Domain\Auth\Events\UserRequestedActivationEmail;
use CreatyDev\Domain\Auth\Events\UserSignedUp;
use CreatyDev\Domain\Auth\Listeners\SendActivationEmail;
use CreatyDev\Domain\Company\Listeners\CompanyUserEventSubscriber;
use CreatyDev\Domain\Subscriptions\Events\SubscriptionCreated;
use CreatyDev\Domain\Subscriptions\Listeners\SubscriptionCreatedListener;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider {
  /**
   * The event listener mappings for the application.
   *
   * @var array
   */
  protected $listen = [
    AuditTaskCreated::class => [ExecuteAudit::class],
    AuditCompleted::class => [GenerateLead::class],
    SubscriptionCreated::class => [SubscriptionCreatedListener::class],
    UserSignedUp::class => [
      // Remove default team handling
      //      CreateDefaultTeam::class,
      SendActivationEmail::class
    ],
    UserRequestedActivationEmail::class => [SendActivationEmail::class],
    WebhookLeadGenerated::class => [WebhookLeadGeneratedListener::class]
  ];

  /**
   * The subscriber classes to register.
   *
   * @var array
   */
  protected $subscribe = [CompanyUserEventSubscriber::class];

  /**
   * Register any events for your application.
   *
   * @return void
   */
  public function boot() {
    parent::boot();

    //
  }
}
