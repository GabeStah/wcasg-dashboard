@extends('admin.layouts.default')

@section('admin.breadcrumb')
    <li class='breadcrumb-item'>
        <a href="{{ route('admin.users.index') }}">Users</a>
    </li>
    <li class='breadcrumb-item'>{{ $user->name }}</li>
    <li class='breadcrumb-item active'>Roles</li>
@endsection

@section('admin.content')
    <div class="clearfix">
        <div class="card mb-3">
            <div class="card-body">
                <div class="card-title">
                    <strong>{{ $user->name }}</strong>
                </div>

                <form action="{{ route('admin.users.roles.store', $user) }}" method="post">
                    @csrf

                    @include('admin.users.user.roles.partials.forms._roles')

                    @include('admin.users.partials.forms._date')

                    <div class="form-group row">
                        <div class="col-sm-4 offset-sm-4">
                            <button type="submit" class="btn btn-primary">Assign role</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

    @if($roles->count())
        @foreach($roles as $role)
            <div class="clearfix">
                <div class="card mb-2">
                    <div class="card-body">
                        <h2 class="card-title">{{ $role->name }}</h2>
                        @if($role->roleable->expires_at)
                            <p>
                                {{ $role->roleable->expires_at->toDayDateTimeString() }}
                            </p>

                            <ul class="list-inline my-1">
                                <li class="list-inline-item">
                                    <p>
                                        @if($role->roleable->isActive())
                                            <span class="badge badge-success">
                                                Active / Valid | Expires {{ $role->roleable->expires_at->diffForHumans() }}
                                            </span>
                                        @else
                                            <span class="badge badge-danger">
                                                Expired {{ $role->roleable->expires_at->diffForHumans() }}
                                            </span>
                                        @endif
                                    </p>
                                </li>

                                <li class="list-inline-item">
                                    <a href="{{ route('admin.users.roles.destroy', [$user, $role]) }}"
                                       class="btn btn-outline-primary"
                                       data-toggle="modal"
                                       data-target="#revoke-user-role-modal-{{ $role->roleable->id }}">
                                        Remove role
                                    </a>

                                    @include('layouts.admin.partials.modals._confirm_modal', [
                                        'modalId' => "revoke-user-role-modal-{$role->roleable->id}",
                                        'title' => "Revoke role confirmation",
                                        'action' => "revoke-user-role-form-{$role->roleable->id}",
                                        'message' => "Do you want to revoke: {$role->name} role from {$user->name}?",
                                        'type' => "danger"
                                    ])

                                    <form action="{{ route('admin.users.roles.destroy', [$user, $role]) }}"
                                          method="post"
                                          style="display: none;"
                                          id="revoke-user-role-form-{{ $role->roleable->id }}">
                                        @csrf
                                        @method('DELETE')
                                    </form>
                                </li>
                            </ul>


                        @else
                            <form action="{{ route('admin.users.roles.update', [$user, $role]) }}" method="post">
                                @csrf
                                @method('PUT')

                                @include('admin.users.partials.forms._date', ['id' => '_'.$role->roleable->id])

                                <div class="form-group row">
                                    <div class="col-sm-4 offset-sm-4">
                                        <button type="submit" class="btn btn-primary">Update</button>
                                    </div>
                                </div>
                            </form>
                            <li class="list-inline-item">
                                <a href="{{ route('admin.users.roles.destroy', [$user, $role]) }}"
                                   class="btn btn-outline-primary"
                                   data-toggle="modal"
                                   data-target="#revoke-user-role-modal-{{ $role->roleable->id }}">
                                    Revoke / remove role
                                </a>

                                @include('layouts.admin.partials.modals._confirm_modal', [
                                    'modalId' => "revoke-user-role-modal-{$role->roleable->id}",
                                    'title' => "Remove role confirmation",
                                    'action' => "revoke-user-role-form-{$role->roleable->id}",
                                    'message' => "Do you want to remove: {$role->name} role from {$user->name}?",
                                    'type' => "danger"
                                ])

                                <form action="{{ route('admin.users.roles.destroy', [$user, $role]) }}"
                                      method="post"
                                      style="display: none;"
                                      id="revoke-user-role-form-{{ $role->roleable->id }}">
                                    @csrf
                                    @method('DELETE')
                                </form>
                            </li>
                        @endif
                    </div>
                </div>
            </div>
        @endforeach
    @else
        <div class="card card-body">
            <div class="card-text">No roles found.</div>
        </div>
    @endif
@endsection