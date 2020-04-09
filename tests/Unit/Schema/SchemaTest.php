<?php

namespace Tests\Unit\Schema;

use Opis\JsonSchema\{Schema, Validator};
use PHPUnit\Framework\TestCase;

class SchemaTest extends TestCase {
  private $schema;

  protected function setUp(): void {
    $this->schema = Schema::fromJsonString(
      file_get_contents('resources/schemas/wcasg.json')
    );
  }

  public function testEmptyJsonIsValid() {
    $data = json_decode('{}');

    $validator = new Validator();
    $result = $validator->schemaValidation($data, $this->schema);

    $this->assertIsObject($data);
    $this->assertTrue($result->isValid());
  }

  public function testValidJsonIsValid() {
    $data = json_decode(
      file_get_contents('tests/Unit/Schema/plan/valid.wcasg.json')
    );

    $validator = new Validator();
    $result = $validator->schemaValidation($data, $this->schema);

    $this->assertIsObject($data);
    $this->assertTrue($result->isValid());
  }

  public function testInvalidJsonIsInvalid() {
    $data = json_decode(
      file_get_contents('tests/Unit/Schema/plan/invalid.wcasg.json')
    );

    $validator = new Validator();
    $result = $validator->schemaValidation($data, $this->schema);

    $this->assertIsObject($data);
    $this->assertFalse($result->isValid());
    $error = $result->getFirstError();
    $this->assertInstanceOf('Opis\JsonSchema\ValidationError', $error);
  }

  public function testValidSchemaLoads() {
    $this->assertInstanceOf('Opis\JsonSchema\Schema', $this->schema);
  }

  public function testInvalidSchemaThrowsException() {
    $this->expectException('Opis\JsonSchema\Exception\InvalidSchemaException');
    Schema::fromJsonString('invalid-json');
  }
}
