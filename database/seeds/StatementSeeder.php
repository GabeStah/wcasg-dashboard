<?php

use Illuminate\Database\Seeder;

class StatementSeeder extends Seeder {
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run() {
    factory(\CreatyDev\Domain\Statements\Models\Statement::class, 5)->create();
  }
}
