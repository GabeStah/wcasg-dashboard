<?php

namespace CreatyDev\Domain\Subscriptions\Listeners;

use CreatyDev\Domain\Subscriptions\Events\SubscriptionCreated;
use CreatyDev\Domain\Subscriptions\Mail\SubscriptionCreatedMail;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;

class SubscriptionCreatedListener implements ShouldQueue {
  use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

  /**
   * The number of seconds the job can run before timing out.
   *
   * @var int
   */
  public $timeout = 60;

  /**
   * The number of times the job may be attempted.
   *
   * @var int
   */
  public $tries = 3;

  /**
   * Create the event listener.
   *
   * @return void
   */
  public function __construct() {
    //
  }

  /**
   * Handle the event.
   *
   * @param SubscriptionCreated $event
   *
   * @return void
   */
  public function handle(SubscriptionCreated $event) {
    Mail::to($event->user->email)->send(
      new SubscriptionCreatedMail(
        $event->plan,
        $event->subscription,
        $event->user,
        $event->payment_method,
        $event->coupon
      )
    );
  }
}
