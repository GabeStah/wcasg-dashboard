<?php

namespace CreatyDev\App\Providers;

use Illuminate\Support\ServiceProvider;
use CreatyDev\Domain\Users\Models\Role;
use CreatyDev\Domain\Users\Observers\RoleObserver;
use Spatie\BladeX\Facades\BladeX;

class AppServiceProvider extends ServiceProvider {
  /**
   * Bootstrap any application services.
   *
   * @return void
   */
  public function boot() {
    //model observers
    //        Category::observe(CategoryObserver::class);
    //        Tag::observe(TagObserver::class);
    Role::observe(RoleObserver::class);
    // Register components
    BladeX::component('components.*');
  }

  /**
   * Register any application services.
   *
   * @return void
   */
  public function register() {
    if ($this->app->environment() !== 'production') {
      $this->app->register(
        \Barryvdh\LaravelIdeHelper\IdeHelperServiceProvider::class
      );
    }
  }
}
