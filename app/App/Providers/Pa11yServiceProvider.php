<?php

namespace CreatyDev\App\Providers;

use CreatyDev\App\Pa11y\Pa11y;
use CreatyDev\App\Pa11y\Pa11yWebService;
use GuzzleHttp\Client;
use Illuminate\Support\ServiceProvider;

class Pa11yServiceProvider extends ServiceProvider {
  /**
   * Bootstrap services.
   *
   * @return void
   */
  public function boot() {
    $this->app->singleton(Pa11y::class, function () {
      return new Pa11yWebService(new Client());
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
