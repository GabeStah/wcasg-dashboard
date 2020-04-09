<?php

namespace CreatyDev\App\Providers;

use CreatyDev\App\JsonSchemaValidator\JsonSchemaValidatorService;
use Illuminate\Support\ServiceProvider;

class JsonSchemaValidatorServiceProvider extends ServiceProvider {
  /**
   * Register services.
   *
   * @return void
   */
  public function register() {
    //
  }

  /**
   * Bootstrap services.
   *
   * @return void
   */
  public function boot() {
    $this->app->singleton(JsonSchemaValidatorService::class, function ($app) {
      $validator = new JsonSchemaValidatorService();
      $validator->setSchema(
        file_get_contents(resource_path('schemas/wcasg.json'))
      );
      return $validator;
    });
  }
}
