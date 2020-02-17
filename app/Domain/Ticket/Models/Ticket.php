<?php

namespace CreatyDev\Domain\Ticket\Models;

use Illuminate\Database\Eloquent\Model;
use CreatyDev\Domain\Users\Models\User;

/**
 * CreatyDev\Domain\Ticket\Models\Ticket
 *
 * @property int $id
 * @property int $user_id
 * @property int $category_id
 * @property string $ticket_id
 * @property string $title
 * @property string $priority
 * @property string $message
 * @property string $status
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \CreatyDev\Domain\Ticket\Models\Category $category
 * @property-read \Illuminate\Database\Eloquent\Collection|\CreatyDev\Domain\Ticket\Models\Comment[] $comments
 * @property-read int|null $comments_count
 * @property-read \CreatyDev\Domain\Users\Models\User $user
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Ticket\Models\Ticket newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Ticket\Models\Ticket newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Ticket\Models\Ticket query()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Ticket\Models\Ticket whereCategoryId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Ticket\Models\Ticket whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Ticket\Models\Ticket whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Ticket\Models\Ticket whereMessage($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Ticket\Models\Ticket wherePriority($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Ticket\Models\Ticket whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Ticket\Models\Ticket whereTicketId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Ticket\Models\Ticket whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Ticket\Models\Ticket whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Ticket\Models\Ticket whereUserId($value)
 * @mixin \Eloquent
 */
class Ticket extends Model {
  protected $fillable = [
    'user_id',
    'category_id',
    'ticket_id',
    'title',
    'priority',
    'message',
    'status'
  ];

  public function category() {
    return $this->belongsTo(Category::class);
  }

  public function comments() {
    return $this->hasMany(Comment::class);
  }

  public function user() {
    return $this->belongsTo(User::class);
  }
}
