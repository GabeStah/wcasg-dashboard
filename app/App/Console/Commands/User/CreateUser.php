<?php

namespace CreatyDev\App\Console\Commands\User;

use CreatyDev\Domain\Auth\Events\UserSignedUp;
use CreatyDev\Domain\Coupon\Models\Coupon;
use CreatyDev\Domain\Subscriptions\Models\Plan;
use CreatyDev\Domain\Users\Models\User;
use Exception;
use Faker\Generator as Faker;
use Illuminate\Console\Command;
use Illuminate\Support\Str;

class CreateUser extends Command {
  /**
   * The name and signature of the console command.
   *
   * @var string
   */
  protected $signature = 'user:create {email} {password?} {--activated : Activate user.} {--plan= : Plan id to assign to user.} {--coupon= : Coupon id to apply to subscription.}';

  /**
   * The console command description.
   *
   * @var string
   */
  protected $description = 'Create a new User with specified email address';

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
      $user = null;
      // Check email argument.
      if (!$this->argument('email')) {
        $this->error('Cannot create a user without an email address.');
      }

      // Set password to assigned or randomly generated
      $password = $this->argument('password')
        ? $this->argument('password')
        : Str::random(12);

      $activated = $this->option('activated') ? true : false;
      $user = factory(User::class)->create([
        'email' => $this->argument('email'),
        'password' => bcrypt($password),
        'activated' => $activated
      ]);

      $this->info(
        "Creating new user of id {$user->id} and email {$user->email}."
      );

      if (!$this->argument('password')) {
        $this->warn("Generated password: $password");
        $this->warn(
          'Save this password somewhere secure as it cannot be recovered.'
        );
      }

      if ($this->option('plan')) {
        $plan = Plan::findOrFail($this->option('plan'));

        if ($this->option('coupon')) {
          $coupon = Coupon::findOrFail($this->option('coupon'));
          $user
            ->newSubscription($plan->nickname, $plan->id)
            ->withCoupon($coupon->id)
            ->create(null);
          $this->info('Creating subscription with coupon.');
        } else {
          $user->newSubscription($plan->nickname, $plan->id)->create(null);
          $this->info('Creating subscription.');
        }
      }

      if (!$activated) {
        // Send activation email
        $this->info('Sending activation email.');
        event(new UserSignedUp($user));
      }
    } catch (Exception $exception) {
      $this->error($exception->getMessage());
    }
  }
}
