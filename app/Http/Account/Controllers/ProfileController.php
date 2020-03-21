<?php

namespace CreatyDev\Http\Account\Controllers;

use CreatyDev\App\Controllers\Controller;
use CreatyDev\App\Traits\UploadTrait;
use CreatyDev\Domain\Account\Requests\ProfileStoreRequest;
use CreatyDev\Domain\Users\Models\User;
use Illuminate\Contracts\View\Factory;
use Illuminate\Http\Response;
use Illuminate\Support\Str;
use Illuminate\View\View;

class ProfileController extends Controller {
  use UploadTrait;

  /**
   * Show the user profile view.
   *
   * @return Factory|Response|View
   */
  public function index() {
    $rows = [
      ['field' => 'first_name', 'title' => 'First Name', 'required' => true],
      ['field' => 'last_name', 'title' => 'Last Name', 'required' => true],
      ['field' => 'username', 'title' => 'Username', 'required' => true],
      [
        'field' => 'email',
        'title' => 'Email',
        'required' => true,
        'type' => 'email'
      ],
      ['field' => 'phone', 'title' => 'Phone'],
      ['field' => 'company_name', 'title' => 'Company Name'],
      ['field' => 'address1', 'title' => 'Address'],
      ['field' => 'address2', 'title' => 'Address 2'],
      ['field' => 'city', 'title' => 'City'],
      ['field' => 'state', 'title' => 'State'],
      ['field' => 'postal_code', 'title' => 'Postal Code'],
      [
        'field' => 'country',
        'title' => 'Country',
        'default' => 'United States'
      ]
    ];

    return view('account.profile.index', compact('rows'));
  }

  /**
   * Store user's profile details in storage.
   *
   * @param ProfileStoreRequest $request
   * @return Response
   */
  public function store(ProfileStoreRequest $request) {
    //update user
    $request
      ->user()
      ->update(
        $request->only([
          'first_name',
          'last_name',
          'username',
          'email',
          'phone',
          'company_name',
          'address1',
          'address2',
          'city',
          'state',
          'country',
          'postal_code'
        ])
      );

    // Get current user
    $user = User::findOrFail(auth()->user()->id);

    // Check if a profile image has been uploaded
    if ($request->has('profile_image')) {
      // Get image file
      $image = $request->file('profile_image');
      // Make a image name based on user name and current timestamp
      $name = str::slug($request->input('name')) . '_' . time();
      // Define folder path
      $folder = '/uploads/images/';
      // Make a file path where image will be stored [ folder path + file name + file extension]
      $filePath = $folder . $name . '.' . $image->getClientOriginalExtension();
      // Upload image
      $this->uploadOne($image, $folder, 'public', $name);
      // Set user profile image path in database to filePath
      $user->profile_image = $filePath;
    }
    // Persist user record to database
    $user->save();
    //redirect with success
    return back()->withSuccess('Profile updated successfully.');
  }
}
