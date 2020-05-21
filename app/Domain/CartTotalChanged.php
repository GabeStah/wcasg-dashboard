<?php

namespace CreatyDev\Domain;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Livewire\Component;

class CartTotalChanged {
  use Dispatchable, InteractsWithSockets, SerializesModels;

  public $component;
  public $total;

  /**
   * Create a new event instance.
   *
   * @param $total
   * @param Component $component
   */
  public function __construct($total, Component $component) {
    $this->component = $component;
    $this->total = $total;
  }

  /**
   * Get the channels the event should broadcast on.
   *
   * @return Channel|array
   */
  public function broadcastOn() {
    return new PrivateChannel('channel-name');
  }
}
