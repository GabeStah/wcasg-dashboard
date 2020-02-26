<?php

namespace CreatyDev\Domain\Audits\Models;

use CreatyDev\App\Traits\Eloquent\Roles\HasToken;
use CreatyDev\Domain\Statements\Models\Statement;
use CreatyDev\Domain\Users\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use CreatyDev\Solarix\Cashier\Subscription;

class Audit extends Model {
  use HasToken;
}
