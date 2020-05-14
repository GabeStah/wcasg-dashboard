<?php

namespace CreatyDev\Domain\Api\Webhook;

/**
 * Interface WebhookRoutableInterface
 * @package CreatyDev\Domain\Api\Webhook
 */
interface WebhookRoutableInterface {
  /**
   * Get a webhook route.
   *
   * @return string
   */
  public function getWebhookRoute(): string;
}
