<?php

namespace CreatyDev\App\Providers;

use CreatyDev\Solarix\Coeus\CoeusApiService;
use GuzzleHttp\Client;
use Illuminate\Support\ServiceProvider;

class CoeusApiServiceProvider extends ServiceProvider {
  /**
   * Bootstrap services.
   *
   * @return void
   */
  public function boot() {
    $this->app->singleton(CoeusApiService::class, function () {
      return new CoeusApiService(new Client());
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
