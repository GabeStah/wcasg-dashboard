<?php

namespace CreatyDev\App\Providers;

use CreatyDev\Domain\Audits\Events\AuditTaskCreated;
use CreatyDev\Domain\Audits\Listeners\ExecuteAudit;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use CreatyDev\Domain\Auth\Events\UserRequestedActivationEmail;
use CreatyDev\Domain\Auth\Events\UserSignedUp;
use CreatyDev\Domain\Auth\Listeners\CreateDefaultTeam;
use CreatyDev\Domain\Auth\Listeners\SendActivationEmail;
use CreatyDev\Domain\Company\Listeners\CompanyUserEventSubscriber;

class EventServiceProvider extends ServiceProvider {
  /**
   * The event listener mappings for the application.
   *
   * @var array
   */
  protected $listen = [
    AuditTaskCreated::class => [ExecuteAudit::class],
    UserSignedUp::class => [
      CreateDefaultTeam::class,
      SendActivationEmail::class
    ],
    UserRequestedActivationEmail::class => [SendActivationEmail::class]
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
