<?php

namespace CreatyDev\Domain\Ticket\Models;

use Illuminate\Database\Eloquent\Model;
use CreatyDev\Domain\Users\Models\User;

/**
 * CreatyDev\Domain\Ticket\Models\Comment
 *
 * @property int $id
 * @property int $ticket_id
 * @property int $user_id
 * @property string $comment
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \CreatyDev\Domain\Ticket\Models\Ticket $ticket
 * @property-read \CreatyDev\Domain\Users\Models\User $user
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Ticket\Models\Comment newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Ticket\Models\Comment newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Ticket\Models\Comment query()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Ticket\Models\Comment whereComment($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Ticket\Models\Comment whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Ticket\Models\Comment whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Ticket\Models\Comment whereTicketId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Ticket\Models\Comment whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Ticket\Models\Comment whereUserId($value)
 * @mixin \Eloquent
 */
class Comment extends Model
{
    protected $fillable = [
    'ticket_id', 'user_id', 'comment'
    ];

    public function ticket()
    {
        return $this->belongsTo(Ticket::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
