<?php

namespace CreatyDev\App\Console\Commands\Site;

use CreatyDev\Domain\Api\Widget\Events\WidgetRequested;
use CreatyDev\Domain\Users\Models\User;
use Exception;
use Faker\Generator as Faker;
use Illuminate\Console\Command;
use Tests\Mock\Request as MockRequest;

class GenerateStatistics extends Command {
  /**
   * Default request count if argument not provided.
   */
  const COUNT_DEFAULT = 10;

  /**
   * The name and signature of the console command.
   *
   * @var string
   */
  protected $signature = 'site:generate-statistics {count?}';

  /**
   * The console command description.
   *
   * @var string
   */
  protected $description = 'Generate fake site request statistics for special Users\' Sites.';

  /**
   * Create a new command instance.
   *
   * @return void
   */
  public function __construct() {
    parent::__construct();
  }

  /**
   * Execute the console command.
   *
   * @param Faker $faker
   *
   * @return mixed
   * @throws Exception
   */
  public function handle(Faker $faker) {
    try {
      $users = User::whereIn('email', [
        'gabe@solarixdigital.com',
        'kyle@solarixdigital.com',
        'dev+wcasg@solarixdigital.com',
        'dev+kickpages@solarixdigital.com'
      ])->get();

      // Set request count to argument or to default
      $count = $this->argument('count')
        ? $this->argument('count')
        : self::COUNT_DEFAULT;

      $requestsCreated = 0;

      foreach ($users as $user) {
        foreach ($user->sites as $site) {
          for ($i = 0; $i < $count; $i++) {
            $request = new MockRequest();
            event(
              new WidgetRequested(
                $site,
                $faker->text($faker->numberBetween(1000, 1000000)),
                $request,
                true
              )
            );
            $requestsCreated++;
          }
        }
      }

      $this->info("$requestsCreated requests generated.");
    } catch (Exception $exception) {
      $this->error($exception->getMessage());
    }
  }
}
