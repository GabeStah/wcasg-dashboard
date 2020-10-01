<?php

namespace Tests\Mock;

use Faker\Factory as FakerFactory;

/**
 * Mock fake Request for testing and one-off console commands
 *
 * Class Request
 * @package Tests\Mock
 */
class Request {
  public $host;
  public $url;
  public $fingerprint;
  public $headers;
  public $ip;
  public $path;
  public $timestamp;

  public function __construct() {
    $faker = FakerFactory::create();
    $this->headers = [
      'host' => $faker->domainName,
      'connection' => 'keep-alive',
      'pragma' => 'no-cache',
      'cache-control' => $faker->randomElement(['no-cache', 'no-store', null]),
      'origin' => $faker->domainName,
      'user-agent' => $faker->userAgent,
      'accept' => '*/*',
      'referer' => $faker->domainName,
      'accept-encoding' => 'gzip, deflate',
      'accept-language' => 'en-US,en;q=0.9'
    ];
    $this->fingerprint = $faker->md5;
    $this->host = $faker->domainName;
    $this->ip = $faker->ipv4;
    $this->timestamp = intval($faker->dateTimeThisYear->getTimestamp());
    $this->url = $faker->url;
  }

  public function fingerprint() {
    return $this->fingerprint;
  }

  public function getHeaders() {
    return $this->headers;
  }

  public function getHost() {
    return $this->host;
  }

  public function ip() {
    return $this->ip;
  }

  public function path() {
    return $this->path;
  }

  public function fullUrl() {
    return $this->url;
  }

  public function getTimestamp() {
    return $this->timestamp;
  }
}
