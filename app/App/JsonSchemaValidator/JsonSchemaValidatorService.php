<?php

namespace CreatyDev\App\JsonSchemaValidator;

use Opis\JsonSchema\Schema;
use Opis\JsonSchema\Validator;
use Opis\JsonSchema\Exception\InvalidSchemaException;

class JsonSchemaValidatorService extends Validator {
  public $schema;
  public $schemaJson;

  public function createContext($type, $restraint) {
    $context = null;
    if ($type === 'plan') {
      $context = (object) [
        $type => (object) [
          'restraints' => [
            (object) [
              'entity' => $restraint->entity,
              'comparator' => $restraint->comparator,
              'value' => $restraint->value
            ]
          ]
        ]
      ];
    }

    $result = $this->validate($context);
    if ($result->isValid()) {
      return $context;
    } else {
      throw new InvalidSchemaException("Unable to generate $type context.");
    }
  }

  public function getRestraintSchema() {
    $properties = $this->schemaJson->definitions->restraint->properties;
    return [
      'entities' => array_map(function ($value) {
        return ['value' => $value, 'text' => $value];
      }, $properties->entity->enum),
      'comparators' => array_map(function ($value) {
        return ['value' => $value, 'text' => $value];
      }, $properties->comparator->enum),
      'valueTypes' => array_map(function ($value) {
        return ['value' => $value, 'text' => $value];
      }, $properties->value->type)
    ];
  }

  public function setSchema($schema) {
    $this->schemaJson = json_decode($schema);
    $this->schema = Schema::fromJsonString($schema);
  }

  public function validate($data) {
    return $this->schemaValidation($data, $this->schema);
  }
}
