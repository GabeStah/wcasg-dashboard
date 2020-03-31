<?php

namespace CreatyDev\App\Providers;

use CreatyDev\Domain\Sites\Models\Site;
use CreatyDev\Domain\Statements\Models\Statement;
use CreatyDev\Domain\Statements\Models\StatementTemplate;
use CreatyDev\Domain\Statements\Observers\StatementObserver;
use CreatyDev\Domain\Statements\Observers\StatementTemplateObserver;
use CreatyDev\Domain\Subscriptions\Models\Plan;
use CreatyDev\Domain\Subscriptions\Observers\PlanObserver;
use CreatyDev\Domain\Sites\Observers\SiteObserver;
use CreatyDev\Domain\Users\Models\User;
use CreatyDev\Domain\Users\Observers\UserObserver;
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
    Plan::observe(PlanObserver::class);
    Role::observe(RoleObserver::class);
    Site::observe(SiteObserver::class);
    Statement::observe(StatementObserver::class);
    StatementTemplate::observe(StatementTemplateObserver::class);
    User::observe(UserObserver::class);
    // Register components
    BladeX::component('components.info-icon')->tag('info-icon');
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
