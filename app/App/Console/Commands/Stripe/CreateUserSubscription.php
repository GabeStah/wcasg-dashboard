<?php

namespace CreatyDev\App\Console\Commands\Stripe;

use CreatyDev\Domain\Subscriptions\Models\Plan;
use CreatyDev\Domain\Users\Models\User;
use Exception;
use Faker\Generator as Faker;
use Illuminate\Console\Command;
use Laravel\Cashier\Cashier;
use Stripe\Token;

class CreateUserSubscription extends Command {
  private $maxChargeAmount = 50;
  private $cardTypes = ['fake', 'prepaid'];

  /**
   * The name and signature of the console command.
   *
   * @var string
   */
  protected $signature = 'stripe:create-user-subscription {user_id?} {amount=50} {--C|card=fake : Card type to use (fake, prepaid)}';

  /**
   * The console command description.
   *
   * @var string
   */
  protected $description = 'Create a new Stripe Plan with {amount} cost, then assign to {user_id} as new Subscription';

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
      // Check user argument.
      if (!$this->argument('user_id')) {
        $user = factory(User::class)->create();
        $this->info("No 'user_id' specified.");
        $this->info(
          "Creating new user of id {$user->id} and email {$user->email}."
        );
      } else {
        $user = User::findOrFail($this->argument('user_id'));
        $this->info(
          "Found user with email {$user->email} matching 'user_id' {$this->argument(
            'user_id'
          )}."
        );
      }

      $amount = $this->argument('amount');
      $cardType = $this->option('card');

      // Check max charge amount.
      if (
        $amount > $this->maxChargeAmount &&
        !$this->confirm(
          "Charge amount set to {$amount} cents.  Do you wish to proceed?"
        )
      ) {
        $this->info('Aborting transaction.');
        return;
      }

      // Check card type.
      if (!in_array($cardType, $this->cardTypes)) {
        throw new Exception(
          "Card type '{$cardType}' not found in allowed cards."
        );
      }

      $token = null;
      if ($cardType === 'fake') {
        $token = Token::create(factory(Token::class)->raw());
      } elseif ($cardType === 'prepaid') {
        $token = Token::create(
          factory(Token::class)->raw([
            'card' => [
              'number' => config('solarix.cc.prepaid.number'),
              'exp_month' => config('solarix.cc.prepaid.month'),
              'exp_year' => config('solarix.cc.prepaid.year'),
              'cvc' => config('solarix.cc.prepaid.cvc')
            ]
          ])
        );
      }

      if (!$token) {
        throw new Exception('Valid token could not be generated.');
      }

      $planName = $faker->words(3, true);
      $slug = str_replace(' ', '-', $planName);
      $gateway_id = str_replace(' ', '_', $planName);
      $stripePlan = \Stripe\Plan::create([
        'amount' => $amount,
        'interval' => 'month',
        'product' => [
          'name' => $planName
        ],
        'currency' => 'usd',
        'id' => $gateway_id,
        'trial_period_days' => 14
      ]);

      $plan = factory(Plan::class)->create([
        'name' => $planName,
        'gateway_id' => $gateway_id,
        'price' => $amount,
        'interval' => 'month',
        'teams_enabled' => false,
        'teams_limit' => 0,
        'active' => 1,
        'slug' => $slug,
        'trial_period_days' => 14
      ]);

      if ($user->hasStripeId()) {
        $this->info(
          "Using User's existing Stripe Customer ID: {$user->stripe_id}"
        );
      } else {
        $this->warn('User is not registered as Stripe Customer.  Generating.');
        $customer = $user->createStripeCustomer();
        $this->info("User's Stripe Customer ID generated: {$customer->id}");
      }

      $subscription = $user
        ->newSubscription($gateway_id, $gateway_id)
        ->create($token->id, [], $plan->id);

      dd($subscription);
    } catch (Exception $exception) {
      $this->error($exception->getMessage());
    }
  }
}
