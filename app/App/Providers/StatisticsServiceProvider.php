<?php

namespace CreatyDev\App\Providers;

use CreatyDev\Solarix\Coeus\CoeusApiService;
use CreatyDev\Solarix\Statistics\StatisticsService;
use GuzzleHttp\Client;
use Illuminate\Support\ServiceProvider;

class StatisticsServiceProvider extends ServiceProvider {
  /**
   * Bootstrap services.
   *
   * @return void
   */
  public function boot() {
    $this->app->singleton(StatisticsService::class, function () {
      return new StatisticsService(new CoeusApiService(new Client()));
    });
  }

  /**
   * Register services.
   *
   * @return void
   */
  public function register() {
    //
  }
}
