<?php

namespace CreatyDev\App\Providers;

use CreatyDev\Domain\Configuration\Models\Configuration;
use CreatyDev\Domain\Configuration\Observers\ConfigurationObserver;
use CreatyDev\Domain\Coupon\Models\Coupon;
use CreatyDev\Domain\Coupon\Observers\CouponObserver;
use CreatyDev\Domain\Sites\Models\Site;
use CreatyDev\Domain\Sites\Observers\SiteObserver;
use CreatyDev\Domain\Statements\Models\Statement;
use CreatyDev\Domain\Statements\Models\StatementTemplate;
use CreatyDev\Domain\Statements\Observers\StatementObserver;
use CreatyDev\Domain\Statements\Observers\StatementTemplateObserver;
use CreatyDev\Domain\Subscriptions\Models\Plan;
use CreatyDev\Domain\Subscriptions\Observers\PlanObserver;
use CreatyDev\Domain\Users\Models\Role;
use CreatyDev\Domain\Users\Models\User;
use CreatyDev\Domain\Users\Observers\RoleObserver;
use CreatyDev\Domain\Users\Observers\UserObserver;
use Illuminate\Support\ServiceProvider;
use Spatie\BladeX\Facades\BladeX;

class AppServiceProvider extends ServiceProvider {
  /**
   * Bootstrap any application services.
   *
   * @return void
   */
  public function boot() {
    if (config('app.env') === 'local') {
      // Set explicit error level for local dev
      error_reporting(E_ALL & ~E_NOTICE & ~E_STRICT & ~E_DEPRECATED);
    }
    //model observers
    //        Category::observe(CategoryObserver::class);
    //        Tag::observe(TagObserver::class);
    Configuration::observe(ConfigurationObserver::class);
    Coupon::observe(CouponObserver::class);
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
