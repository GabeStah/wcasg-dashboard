<?php

namespace CreatyDev\Solarix\Coeus;

use GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;
use GuzzleHttp\Psr7\Response;
use Psr\Http\Message\ResponseInterface;

class CoeusApiService {
  private const HTTP_METHOD = 'POST';

  /**
   * Holds GuzzleHttp Client.
   * To handle API requests.
   *
   * @var Client
   */
  protected $client;

  /**
   * @var string
   */
  private $token;
  /**
   * @var string
   */
  private $baseUrl;

  /**
   * @param Client $client
   */
  public function __construct(Client $client) {
    $this->client = $client;
    $this->baseUrl = config('solarix.coeus.url');
    $this->token = config('solarix.coeus.token');
  }

  private function getHeaders() {
    return [
      'Accept' => 'application/json',
      'Accept-Encoding' => 'gzip, deflate',
      'Authorization' => 'Bearer ' . $this->token,
      'Content-Type' => 'application/json',
      'User-Agent' => 'wcasg-widget-dashboard/1.0'
    ];
  }

  /**
   * @param string $path
   * @return string
   */
  private function getUri(string $path) {
    return $this->baseUrl . $path;
  }

  /**
   * Execute data service aggregate method request.
   *
   * @param $pipeline
   * @return ResponseInterface
   */
  public function aggregate($pipeline) {
    try {
      return $this->client->request(
        self::HTTP_METHOD,
        $this->getUri('/data/aggregate'),
        [
          'body' => json_encode([
            'collection' => config('solarix.coeus.collections.statistics'),
            'db' => config('solarix.coeus.db'),
            'pipeline' => $pipeline
          ]),
          'headers' => $this->getHeaders()
        ]
      );
    } catch (RequestException $e) {
      return new Response(
        503,
        [],
        null,
        '1.1',
        'Unable to connect to statistics API service.'
      );
    }
  }

  /**
   * Execute data service insert method request.
   *
   * @param mixed $document
   * @return ResponseInterface
   */
  public function insert($document) {
    return $this->client->request(
      self::HTTP_METHOD,
      $this->getUri('/data/insert'),
      [
        'body' => json_encode([
          'collection' => config('solarix.coeus.collections.statistics'),
          'db' => config('solarix.coeus.db'),
          'document' => [$document]
        ]),
        'headers' => $this->getHeaders()
      ]
    );
  }
}
