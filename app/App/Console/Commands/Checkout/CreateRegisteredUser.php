<?php

namespace CreatyDev\App\Console\Commands\Checkout;

use CreatyDev\Domain\Subscriptions\Models\Plan;
use CreatyDev\Domain\Users\Models\User;
use CreatyDev\Http\Auth\Controllers\RegisterController;
use Exception;
use Faker\Generator as Faker;
use Illuminate\Console\Command;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class CreateRegisteredUser extends Command {
  /**
   * The name and signature of the console command.
   *
   * @var string
   */
  protected $signature = 'checkout:create-registered-user {email=gabe@solarixdigital.com} {--plan}';

  /**
   * The console command description.
   *
   * @var string
   */
  protected $description = 'Create a new registered User.';

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
   * @param RegisterController $registerController
   * @return mixed
   */
  public function handle(Faker $faker, RegisterController $registerController) {
    try {
      // Check provided email
      $emailParts = explode('@', $this->argument('email'));
      // Check if first part contains explicit extra content
      if (strpos($emailParts[0], '+') === false) {
        // Add random extra
        $emailParts[0] .= '+' . strtolower(Str::random(8));
      }

      $request = new Request();
      $request->replace(
        factory(User::class)->raw([
          'email' => implode('@', $emailParts),
          'terms' => true
        ])
      );

      if ($this->option('plan')) {
        $plan = Plan::first();
        $this->info('Adding plan [' . $plan->id . '] to request.');
        $request->merge(['plan_id' => $plan->id]);
      }

      $registerController->register($request);

      $this->info('New registered user created: ' . implode('@', $emailParts));
    } catch (Exception $exception) {
      $this->error($exception->getMessage());
    }
  }
}
