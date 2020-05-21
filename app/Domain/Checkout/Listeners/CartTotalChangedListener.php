<?php

namespace CreatyDev\Domain\Checkout\Listeners;

use CreatyDev\Domain\CartTotalChanged;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class CartTotalChangedListener implements ShouldQueue {
  use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
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
   * @param CartTotalChanged $event
   *
   * @return void
   */
  public function handle(CartTotalChanged $event) {
    // Emit to component
    $event->component->emit('totalChanged', $event->total);
  }
}
