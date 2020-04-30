<?php

namespace CreatyDev\Domain\Teams\Mail;

use CreatyDev\Domain\Teams\Models\Team;
use CreatyDev\Domain\Users\Models\User;
use CreatyDev\Solarix\Mail\Mailable;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;

class TeamMemberDeleted extends Mailable {
  use Queueable, SerializesModels;

  /**
   * User instance.
   *
   * @var User
   */
  public $user;

  /**
   * Team instance.
   *
   * @var Team
   */
  public $team;

  /**
   * Create a new message instance.
   *
   * @param User $user
   * @param Team $team
   */
  public function __construct(User $user, Team $team) {
    parent::__construct();
    $this->user = $user;
    $this->team = $team;
  }

  /**
   * Build the message.
   *
   * @return $this
   */
  public function build() {
    return $this->subject('Team Membership Cancelled')->mjml(
      'emails.team.member.deleted',
      [
        'hero_title' => 'Team Membership Cancelled',
        'hero_text' => 'Your team membership has been cancelled.',
        'team' => $this->team,
        'user' => $this->user
      ]
    );
  }
}
