<?php

namespace CreatyDev\Domain\Teams\Mail;

use CreatyDev\Domain\Teams\Models\Team;
use CreatyDev\Domain\Users\Models\User;
use CreatyDev\Solarix\Mail\Mailable;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;

class TeamMemberAdded extends Mailable {
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
    return $this->subject('Team Membership')->mjml('emails.team.member.added', [
      'hero_title' => 'Team Member Added',
      'hero_text' => 'A new team member has been added',
      'team' => $this->team,
      'user' => $this->user
    ]);
  }
}
