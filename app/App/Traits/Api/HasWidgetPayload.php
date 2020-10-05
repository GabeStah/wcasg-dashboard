<?php

namespace CreatyDev\App\Traits\Api;

use CreatyDev\Domain\Configuration\Models\Configuration;
use CreatyDev\Domain\Sites\Models\Site;
use DateTime;
use Illuminate\Contracts\Filesystem\FileNotFoundException;
use Illuminate\Support\Facades\Storage;
use LZCompressor\LZString;
use ParagonIE\Paseto\Exception\PasetoException;
use ParagonIE\Paseto\Keys\Version2\SymmetricKey;
use ParagonIE\Paseto\Protocol\Version2;
use SodiumException;

/**
 * Generates Widget payload.
 *
 * Trait HasWidgetPayload
 */
trait HasWidgetPayload {
  /**
   * Generate full, ordered payload.
   * Widget MUST be final inclusion.
   *
   * @param Site $site
   *
   * @return string
   * @throws FileNotFoundException
   */
  protected function getPayload(Site $site) {
    $payloads = [];
    array_push($payloads, $this->getDisclaimerPayload());
    array_push($payloads, $this->getExtensionPayload($site));
    array_push($payloads, $this->getWidgetTTSRequestDataPayload($site));
    array_push($payloads, $this->getStatementPayload($site));
    array_push($payloads, $this->getWidgetPayload());
    return implode('', $payloads);
  }

  /**
   * Gets packed module for disclaimer.
   *
   * @return string
   */
  protected function getDisclaimerPayload() {
    $configuration = Configuration::first();
    if (
      $configuration &&
      $configuration->settings &&
      $configuration->settings['disclaimer']
    ) {
      $disclaimer = LZString::decompressFromBase64(
        $configuration->settings['disclaimer']
      );
      if ($disclaimer) {
        return webpackify('WcasgDisclaimer', $disclaimer);
      }
    }
    return '';
  }

  /**
   * Gets packed module for Extensions.
   *
   * @param Site $site
   *
   * @return string
   */
  protected function getExtensionPayload(Site $site) {
    $extensions = $site->extensions->where('enabled', '=', true);
    if ($extensions) {
      // Need to reindex array because unordered array converted
      // via json encode produces an object, rather than an array.
      $reindexed = [];
      foreach ($extensions->toArray() as $item) {
        array_push($reindexed, $item);
      }
      return webpackify('WcasgExtensions', json_encode($reindexed));
    }
    return '';
  }

  /**
   * Gets packed module for TTS request data.
   *
   * @param Site $site
   *
   * @return string
   */
  protected function getWidgetTTSRequestDataPayload(Site $site) {
    $encrypted = '';
    try {
      $encrypted = Version2::encrypt(
        json_encode([
          'coeus' => [
            'url' => config('solarix.coeus.url')
          ],
          'request' => [
            'timestamp' => (new DateTime())->getTimestamp(),
            'type' => 'tts'
          ],
          'site' => $site->toArraySimple()
        ]),
        new SymmetricKey(config('app.paseto.secret'))
      );
    } catch (PasetoException $e) {
      // noop
    } catch (SodiumException $e) {
      // noop
    } finally {
      return webpackify('WcasgWidgetTTSRequestData', $encrypted);
    }
  }

  /**
   * Gets packed module for accessibility Statement.
   *
   * @param Site $site
   *
   * @return string
   */
  protected function getStatementPayload(Site $site) {
    if ($site->statement) {
      $content = $site->statement->render($site);
      if ($content) {
        return webpackify('WcasgAccessibilityStatement', $content);
      }
    }
    return '';
  }

  /**
   * Get base Widget script file from storage.
   *
   * @return string
   * @throws FileNotFoundException
   */
  protected function getWidgetPayload() {
    return Storage::disk('widget')->get(config('widget.base.filename'));
  }
}
