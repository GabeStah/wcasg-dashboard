<?php

namespace CreatyDev\App\Providers;

use CreatyDev\Domain\ConfirmationToken;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Route;

class RouteServiceProvider extends ServiceProvider {
  /**
   * This namespace is applied to your controller routes.
   *
   * In addition, it is set as the URL generator's root namespace.
   *
   * @var string
   */
  protected $namespace = 'CreatyDev\Http';

  /**
   * Define your route model bindings, pattern filters, etc.
   *
   * @return void
   */
  public function boot() {
    parent::boot();

    Route::model('confirmation_token', ConfirmationToken::class);
  }

  /**
   * Define the routes for the application.
   *
   * @return void
   */
  public function map() {
    $this->mapApiRoutes();
    $this->mapWebRoutes();
    $this->mapTenantRoutes();
  }

  /**
   * Define the "web" routes for the application.
   *
   * These routes all receive session state, CSRF protection, etc.
   *
   * @return void
   */
  protected function mapWebRoutes() {
    Route::middleware('web', 'bindings')
      ->namespace($this->namespace)
      ->group(function ($router) {
        // Require all route files in /web
        foreach (File::allFiles(base_path('/routes/web')) as $route_file) {
          require $route_file->getPathname();
        }
      });
  }

  /**
   * Define the "api" routes for the application.
   *
   * These routes are typically stateless.
   *
   * @return void
   */
  protected function mapApiRoutes() {
    Route::prefix('api')
      ->middleware('api')
      ->namespace($this->namespace)
      ->group(base_path('routes/api.php'));
  }

  /**
   * Define the "web" routes for the application.
   *
   * These routes all receive session state, CSRF protection, etc.
   *
   * @return void
   */
  protected function mapTenantRoutes() {
    Route::middleware('web', 'tenant', 'bindings')
      ->namespace("{$this->namespace}\Tenant\Controllers")
      ->group(base_path('routes/tenant.php'));
  }
}
