<?php

namespace CreatyDev\Http\Admin\Controllers\Announcement;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Notification;
use CreatyDev\Domain\Users\Models\User;
use CreatyDev\App\Controllers\Controller;
use Illuminate\Foundation\Console\Presets\Vue;

use CreatyDev\Domain\Notifications\Announcement;

class AnnouncementController extends Controller {
  /**
   * Display a listing of the resource.
   *
   * @param Request $request
   * @return \Illuminate\Http\Response
   * @throws \Illuminate\Auth\Access\AuthorizationException
   */
  public function index(Request $request) {
  }

  public function create() {
    return View('admin.announcement.create');
  }

  public function store(Request $request) {
    $message = $request->all();
    $users = User::all();
    Notification::send($users, new Announcement($message));

    return redirect()
      ->back()
      ->with('success', 'Your notification sent successfully.');
  }
}
