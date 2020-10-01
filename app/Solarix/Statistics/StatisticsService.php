<?php

namespace CreatyDev\Solarix\Statistics;

use CreatyDev\Domain\Sites\Models\Site;
use CreatyDev\Solarix\Coeus\CoeusApiService;
use DateTime;
use Illuminate\Database\Eloquent\Collection;

class StatisticsService {
  /**
   * @var CoeusApiService
   */
  private $coeus;

  /**
   * @param CoeusApiService $coeus
   */
  public function __construct(CoeusApiService $coeus) {
    $this->coeus = $coeus;
  }

  protected function getTimespanArray($period = 'month', $intervals = 0) {
    switch ($period) {
      case 'day':
        return [
          '$gte' => (new DateTime())
            ->modify("00:00:00 - $intervals $period")
            ->getTimestamp(),
          '$lte' => (new DateTime())
            ->modify("23:59:59.999 - $intervals $period")
            ->getTimestamp()
        ];
      case 'year':
        return [
          '$gte' => (new DateTime())
            ->modify("01/01 this $period 00:00:00 - $intervals $period")
            ->getTimestamp(),
          '$lte' => (new DateTime())
            ->modify("12/31 this $period 23:59:59.999 - $intervals $period")
            ->getTimestamp()
        ];
      default:
        return [
          '$gte' => (new DateTime())
            ->modify("00:00:00 first day of this $period - $intervals $period")
            ->getTimestamp(),
          '$lte' => (new DateTime())
            ->modify(
              "23:59:59.999 last day of this $period - $intervals $period"
            )
            ->getTimestamp()
        ];
    }
  }

  /**
   * Get site statistics of single site or site Collection.
   *
   * @param Site|Collection $site
   * @return array
   */
  public function getSiteStatistics($site) {
    $ids = [];

    // Get flat, re-indexed id array
    if ($site instanceof Collection) {
      $ids = $site
        ->map(function ($val) {
          return $val->id;
        })
        ->flatten()
        ->toArray();
    } else {
      $ids[] = $site->id;
    }

    // Create baseline statistics
    $statistics = [
      'activeSites' => count($ids),
      'views' => [
        'month' => [
          'current' => 0,
          'previous' => 0
        ],
        'year' => 0,
        'total' => 0
      ],
      'bytes' => [
        'averagePerSite' => 0,
        'month' => [
          'current' => 0,
          'previous' => 0
        ],
        'year' => 0,
        'total' => 0,
        'tts' => [
          'averagePerSite' => 0,
          'month' => [
            'current' => 0,
            'previous' => 0
          ],
          'year' => 0,
          'total' => 0
        ]
      ]
    ];

    // short circuit if no sites
    if (count($ids) === 0) {
      return $statistics;
    }

    $pipeline = [
      (object) [
        '$match' => (object) [
          'site.id' => [
            '$in' => $ids
          ]
        ]
      ],
      (object) [
        '$facet' => (object) [
          'viewsMonthCurrent' => [
            (object) [
              '$match' => [
                'request.timestamp' => $this->getTimespanArray('month', 0)
              ]
            ],
            (object) [
              '$count' => 'value'
            ]
          ],
          'viewsMonthPrevious' => [
            (object) [
              '$match' => [
                'request.timestamp' => $this->getTimespanArray('month', 1)
              ]
            ],
            (object) [
              '$count' => 'value'
            ]
          ],
          'viewsYear' => [
            (object) [
              '$match' => [
                'request.timestamp' => $this->getTimespanArray('year', 0)
              ]
            ],
            (object) [
              '$count' => 'value'
            ]
          ],
          'viewsTotal' => [
            (object) [
              '$count' => 'value'
            ]
          ],
          'bytesMonthCurrent' => [
            (object) [
              '$match' => [
                'request.timestamp' => $this->getTimespanArray('month', 0)
              ]
            ],
            (object) [
              '$group' => [
                '_id' => null,
                'value' => [
                  '$sum' => '$request.bytes'
                ]
              ]
            ],
            (object) [
              '$unset' => '_id'
            ]
          ],
          'bytesMonthPrevious' => [
            (object) [
              '$match' => [
                'request.timestamp' => $this->getTimespanArray('month', 1)
              ]
            ],
            (object) [
              '$group' => [
                '_id' => null,
                'value' => [
                  '$sum' => '$request.bytes'
                ]
              ]
            ],
            (object) [
              '$unset' => '_id'
            ]
          ],
          'bytesYear' => [
            (object) [
              '$match' => [
                'request.timestamp' => $this->getTimespanArray('year', 0)
              ]
            ],
            (object) [
              '$group' => [
                '_id' => null,
                'value' => [
                  '$sum' => '$request.bytes'
                ]
              ]
            ],
            (object) [
              '$unset' => '_id'
            ]
          ],
          'bytesTotal' => [
            (object) [
              '$group' => [
                '_id' => null,
                'value' => [
                  '$sum' => '$request.bytes'
                ]
              ]
            ],
            (object) [
              '$unset' => '_id'
            ]
          ],
          'bytesAveragePerSite' => [
            (object) [
              '$group' => [
                '_id' => '$site.id',
                'bytes' => [
                  '$sum' => '$request.bytes'
                ]
              ]
            ],
            (object) [
              '$group' => [
                '_id' => null,
                'value' => [
                  '$avg' => '$bytes'
                ]
              ]
            ],
            (object) [
              '$unset' => '_id'
            ]
          ]
        ]
      ]
    ];

    // Get site statistics via Coeus
    $response = $this->coeus->aggregate($pipeline);
    if ($response->getStatusCode() === 200) {
      // If successful response, update values
      $response = json_decode($response->getBody()->getContents());

      $statistics['views']['month']['current'] =
        $response[0]->viewsMonthCurrent[0]->value ?? 0;
      $statistics['views']['month']['previous'] =
        $response[0]->viewsMonthPrevious[0]->value ?? 0;
      $statistics['views']['year'] = $response[0]->viewsYear[0]->value ?? 0;
      $statistics['views']['total'] = $response[0]->viewsTotal[0]->value ?? 0;

      $statistics['bytes']['averagePerSite'] =
        $response[0]->bytesAveragePerSite[0]->value ?? 0;
      $statistics['bytes']['month']['current'] =
        $response[0]->bytesMonthCurrent[0]->value ?? 0;
      $statistics['bytes']['month']['previous'] =
        $response[0]->bytesMonthPrevious[0]->value ?? 0;
      $statistics['bytes']['year'] = $response[0]->bytesYear[0]->value ?? 0;
      $statistics['bytes']['total'] = $response[0]->bytesTotal[0]->value ?? 0;
    } else {
      $statistics['error'] = $response->getReasonPhrase();
    }

    return $statistics;
  }
}
