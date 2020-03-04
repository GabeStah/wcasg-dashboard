<?php

use Carbon\Carbon;
use CreatyDev\Domain\Extensions\Models\Action;
use CreatyDev\Domain\Extensions\Models\Extension;
use CreatyDev\Domain\Extensions\Models\Predicate;
use CreatyDev\Domain\Sites\Models\Site;
use Illuminate\Contracts\Filesystem\FileNotFoundException;
use Illuminate\Database\Seeder;

class ExtensionSeeder extends Seeder {
  /**
   * Run the database seeds.
   *
   * @return void
   * @throws FileNotFoundException
   */
  public function run() {
    $imports = Storage::disk('extensions')->get(
      config('extensions.imports.filename')
    );

    foreach (json_decode($imports) as $importedExtension) {
      $extension = new Extension([
        'description' => $importedExtension->description,
        'enabled' => $importedExtension->enabled,
        'imported' => true,
        'name' => $importedExtension->name
      ]);
      $extension->save();

      if (isset($importedExtension->predicate)) {
        if (is_array($importedExtension->predicate)) {
          foreach ($importedExtension->predicate as $importedPredicate) {
            $extension->predicates()->create([
              'name' => $importedPredicate->name
            ]);
          }
        } else {
          $extension->predicates()->create([
            'name' => $importedExtension->predicate->name
          ]);
        }
      }

      // Randomly enable for sites
      $sites = Site::all();
      foreach ($sites as $site) {
        if (rand(0, 1)) {
          $site
            ->extensions()
            ->attach($extension->id, ['enabled_at' => Carbon::now()]);
        }
      }
    }

    $this->createExtensions();
  }

  private function createExtensions() {
    for ($i = 0; $i <= 5; $i++) {
      $extension = factory(Extension::class)->create();
      $extension->actions()->save(factory(Action::class)->make());
      $extension->predicates()->save(factory(Predicate::class)->make());

      // Randomly enable for sites
      $sites = Site::all();
      foreach ($sites as $site) {
        if (rand(0, 1)) {
          $site->extensions()->attach($extension->id, [
            'enabled_at' => rand(0, 1) ? null : Carbon::now()
          ]);
        }
      }
    }
  }
}
