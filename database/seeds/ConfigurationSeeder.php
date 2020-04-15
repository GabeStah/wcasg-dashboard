<?php

use CreatyDev\Domain\Configuration\Models\Configuration;
use Illuminate\Database\Seeder;

class ConfigurationSeeder extends Seeder {
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run() {
    $configuration = factory(Configuration::class)->create();
  }
}
