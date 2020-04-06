<?php

use Carbon\Carbon;
use CreatyDev\Domain\Sites\Models\Site;
use CreatyDev\Domain\Subscriptions\Models\Plan;
use CreatyDev\Domain\Users\Models\Role;
use CreatyDev\Domain\Users\Models\User;
use Illuminate\Database\Seeder;
use Stripe\PaymentMethod;

class SpecialUserSeeder extends Seeder {
  public function run() {
    $this->create(
      [
        'first_name' => 'WCASG',
        'last_name' => 'Dev',
        'username' => 'wcasgdev',
        'email' => 'dev+wcasg@solarixdigital.com',
        // SGb1OKSNtk8u
        'password' =>
          '$2y$10$wQ.aZwq3OZICmmzerv7HTuJ8PFG4cY7VvIynhhMeCaTsuRqxgEjEq',
        'activated' => true
      ],
      [
        [
          'domain' => 'wcasg.com',
          'token' => 'e59ba5aefea5e39df61423dab7d6a7cc3ad8'
        ],
        [
          'domain' => 'martinsbonus.com',
          'token' => 'b21208b4f276c1f57c253ea5a66e273b1709'
        ]
      ]
    );

    $this->create(
      [
        'first_name' => 'Kick',
        'last_name' => 'Pages',
        'username' => 'kickpages',
        'email' => 'dev+kickpages@solarixdigital.com',
        // cJzL4LxVB3ap
        'password' =>
          '$2y$10$C37jQpmjqogrDhAJBj3dnubfRyfVmzj5C1dHRWCwWe5RwsZ4KYmia',
        'activated' => true
      ],
      [
        [
          'domain' => 'martinsbonus.com',
          'token' => '45bebfc0aa34cacfa4b4c4d717ba266f15e0'
        ]
      ]
    );
  }

  private function create($userDetails, $domains) {
    $user = $this->createUser($userDetails);
    $subscription = $this->createSubscription($user, Plan::first());
    $this->createSites($subscription, $domains);
  }

  private function createUser($userDetails) {
    $user = factory(User::class)->create($userDetails);

    $admin = Role::where('slug', 'admin-root')->first();
    $month_later = Carbon::now()->addDays(28);

    $user->assignRole($admin, $month_later);

    return $user;
  }

  private function createSubscription($user, $plan) {
    $paymentMethod = PaymentMethod::create(
      factory(PaymentMethod::class)->raw()
    );

    return $user
      ->newSubscription($plan->nickname, $plan->id)
      ->create($paymentMethod);
  }

  private function createSites($subscription, $domainInfo) {
    foreach ($domainInfo as $info) {
      // Create Sites
      factory(Site::class)->create([
        'domain' => $info['domain'],
        'active' => true,
        'token' => $info['token'] ?? null,
        'subscription_id' => $subscription
      ]);
    }
  }
}
