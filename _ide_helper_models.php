<?php

// @formatter:off
/**
 * A helper file for your Eloquent Models
 * Copy the phpDocs from this file to the correct Model,
 * And remove them from this file, to prevent double declarations.
 *
 * @author Barry vd. Heuvel <barryvdh@gmail.com>
 */


namespace CreatyDev\Domain\Coupon\Models{
/**
 * CreatyDev\Domain\Coupon\Models\Coupon
 *
 * @property int $id
 * @property string $name
 * @property string $gateway_id
 * @property float $percent_off
 * @property string $duration
 * @property int|null $duration_in_months
 * @property string|null $currency
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Coupon\Models\Coupon newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Coupon\Models\Coupon newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Coupon\Models\Coupon query()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Coupon\Models\Coupon whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Coupon\Models\Coupon whereCurrency($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Coupon\Models\Coupon whereDuration($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Coupon\Models\Coupon whereDurationInMonths($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Coupon\Models\Coupon whereGatewayId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Coupon\Models\Coupon whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Coupon\Models\Coupon whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Coupon\Models\Coupon wherePercentOff($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Coupon\Models\Coupon whereUpdatedAt($value)
 */
	class Coupon extends \Eloquent {}
}

namespace CreatyDev\Domain\Projects\Models{
/**
 * CreatyDev\Domain\Projects\Models\Project
 *
 * @property int $id
 * @property int $company_id
 * @property string $name
 * @property string $slug
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Projects\Models\Project findSimilarSlugs($attribute, $config, $slug)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Projects\Models\Project newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Projects\Models\Project newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Projects\Models\Project query()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Projects\Models\Project whereCompanyId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Projects\Models\Project whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Projects\Models\Project whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Projects\Models\Project whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Projects\Models\Project whereSlug($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Projects\Models\Project whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Projects\Models\Project withoutForTenants()
 */
	class Project extends \Eloquent {}
}

namespace CreatyDev\Domain\Subscriptions\Models{
/**
 * CreatyDev\Domain\Subscriptions\Models\Plan
 *
 * @property int $id
 * @property string $name
 * @property string $slug
 * @property string $gateway_id
 * @property string $interval
 * @property float $price
 * @property int $active
 * @property int $teams_enabled
 * @property int|null $teams_limit
 * @property int|null $trial_period_days
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Subscriptions\Models\Plan active()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Subscriptions\Models\Plan except($planId)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Subscriptions\Models\Plan findSimilarSlugs($attribute, $config, $slug)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Subscriptions\Models\Plan forTeams()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Subscriptions\Models\Plan forUsers()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Subscriptions\Models\Plan newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Subscriptions\Models\Plan newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Subscriptions\Models\Plan query()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Subscriptions\Models\Plan whereActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Subscriptions\Models\Plan whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Subscriptions\Models\Plan whereGatewayId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Subscriptions\Models\Plan whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Subscriptions\Models\Plan whereInterval($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Subscriptions\Models\Plan whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Subscriptions\Models\Plan wherePrice($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Subscriptions\Models\Plan whereSlug($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Subscriptions\Models\Plan whereTeamsEnabled($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Subscriptions\Models\Plan whereTeamsLimit($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Subscriptions\Models\Plan whereTrialPeriodDays($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Subscriptions\Models\Plan whereUpdatedAt($value)
 */
	class Plan extends \Eloquent {}
}

namespace CreatyDev\Domain\Teams\Models{
/**
 * CreatyDev\Domain\Teams\Models\Team
 *
 * @property int $id
 * @property int $user_id
 * @property string $name
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \CreatyDev\Domain\Users\Models\User $owner
 * @property-read \Illuminate\Database\Eloquent\Collection|\CreatyDev\Domain\Users\Models\User[] $users
 * @property-read int|null $users_count
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Teams\Models\Team newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Teams\Models\Team newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Teams\Models\Team query()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Teams\Models\Team whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Teams\Models\Team whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Teams\Models\Team whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Teams\Models\Team whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Teams\Models\Team whereUserId($value)
 */
	class Team extends \Eloquent {}
}

namespace CreatyDev\Domain\Ticket\Models{
/**
 * CreatyDev\Domain\Ticket\Models\Category
 *
 * @property int $id
 * @property string $name
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\CreatyDev\Domain\Ticket\Models\Ticket[] $tickets
 * @property-read int|null $tickets_count
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Ticket\Models\Category newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Ticket\Models\Category newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Ticket\Models\Category query()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Ticket\Models\Category whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Ticket\Models\Category whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Ticket\Models\Category whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Ticket\Models\Category whereUpdatedAt($value)
 */
	class Category extends \Eloquent {}
}

namespace CreatyDev\Domain\Ticket\Models{
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
 */
	class Comment extends \Eloquent {}
}

namespace CreatyDev\Domain\Ticket\Models{
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
 */
	class Ticket extends \Eloquent {}
}

namespace CreatyDev\Domain\Users\Models{
/**
 * CreatyDev\Domain\Users\Models\ConfirmationToken
 *
 * @property int $id
 * @property int $user_id
 * @property string $token
 * @property \Illuminate\Support\Carbon $expires_at
 * @property-read \CreatyDev\Domain\Users\Models\User $user
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\ConfirmationToken newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\ConfirmationToken newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\ConfirmationToken query()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\ConfirmationToken whereExpiresAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\ConfirmationToken whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\ConfirmationToken whereToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\ConfirmationToken whereUserId($value)
 */
	class ConfirmationToken extends \Eloquent {}
}

namespace CreatyDev\Domain\Users\Models{
/**
 * CreatyDev\Domain\Users\Models\Permission
 *
 * @property int $id
 * @property string $name
 * @property int $usable
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Kalnoy\Nestedset\Collection|\CreatyDev\Domain\Users\Models\Role[] $roles
 * @property-read int|null $roles_count
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\Permission latestDelete()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\Permission latestFirst()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\Permission newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\Permission newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\Permission query()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\Permission whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\Permission whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\Permission whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\Permission whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\Permission whereUsable($value)
 */
	class Permission extends \Eloquent {}
}

namespace CreatyDev\Domain\Users\Models{
/**
 * CreatyDev\Domain\Users\Models\Role
 *
 * @property int $id
 * @property string $name
 * @property string $slug
 * @property string|null $details
 * @property int $_lft
 * @property int $_rgt
 * @property int|null $parent_id
 * @property int $usable
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Kalnoy\Nestedset\Collection|\CreatyDev\Domain\Users\Models\Role[] $children
 * @property-read int|null $children_count
 * @property-read \CreatyDev\Domain\Users\Models\Role|null $parent
 * @property-read \Illuminate\Database\Eloquent\Collection|\CreatyDev\Domain\Users\Models\Permission[] $permissions
 * @property-read int|null $permissions_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\CreatyDev\Domain\Users\Models\User[] $users
 * @property-read int|null $users_count
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\Role d()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\Role filter($request, $filters = [])
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\Role latestDelete()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\Role latestFirst()
 * @method static \Kalnoy\Nestedset\QueryBuilder|\CreatyDev\Domain\Users\Models\Role newModelQuery()
 * @method static \Kalnoy\Nestedset\QueryBuilder|\CreatyDev\Domain\Users\Models\Role newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\Role orderByPivot($column = 'created_at', $order = 'desc')
 * @method static \Kalnoy\Nestedset\QueryBuilder|\CreatyDev\Domain\Users\Models\Role query()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\Role whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\Role whereDetails($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\Role whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\Role whereLft($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\Role whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\Role whereParentId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\Role whereRgt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\Role whereSlug($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\Role whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\Role whereUsable($value)
 */
	class Role extends \Eloquent {}
}

namespace CreatyDev\Domain\Users\Models{
/**
 * CreatyDev\Domain\Users\Models\TwoFactor
 *
 * @property int $id
 * @property int $user_id
 * @property string|null $identifier
 * @property string $phone
 * @property string $dial_code
 * @property int $verified
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \CreatyDev\Domain\Users\Models\User $user
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\TwoFactor newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\TwoFactor newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\TwoFactor query()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\TwoFactor whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\TwoFactor whereDialCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\TwoFactor whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\TwoFactor whereIdentifier($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\TwoFactor wherePhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\TwoFactor whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\TwoFactor whereUserId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\TwoFactor whereVerified($value)
 */
	class TwoFactor extends \Eloquent {}
}

namespace CreatyDev\Domain\Users\Models{
/**
 * CreatyDev\Domain\Users\Models\User
 *
 * @property int $id
 * @property string $first_name
 * @property string $last_name
 * @property string|null $username
 * @property string $profile_image
 * @property string $email
 * @property string|null $phone
 * @property string $password
 * @property int $activated
 * @property string|null $remember_token
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property string|null $stripe_id
 * @property string|null $card_brand
 * @property string|null $card_last_four
 * @property string|null $trial_ends_at
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\Laravel\Passport\Client[] $clients
 * @property-read int|null $clients_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\CreatyDev\Domain\Ticket\Models\Comment[] $comments
 * @property-read int|null $comments_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\CreatyDev\Domain\Company\Models\Company[] $companies
 * @property-read int|null $companies_count
 * @property-read \CreatyDev\Domain\Users\Models\ConfirmationToken $confirmationToken
 * @property-read mixed $image
 * @property-read string $name
 * @property-read mixed $plan
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection|\Illuminate\Notifications\DatabaseNotification[] $notifications
 * @property-read int|null $notifications_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\CreatyDev\Domain\Users\Models\Permission[] $permissions
 * @property-read int|null $permissions_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\CreatyDev\Domain\Subscriptions\Models\Plan[] $plans
 * @property-read int|null $plans_count
 * @property-read \Kalnoy\Nestedset\Collection|\CreatyDev\Domain\Users\Models\Role[] $roles
 * @property-read int|null $roles_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\Laravel\Cashier\Subscription[] $subscriptions
 * @property-read int|null $subscriptions_count
 * @property-read \CreatyDev\Domain\Teams\Models\Team $team
 * @property-read \Illuminate\Database\Eloquent\Collection|\CreatyDev\Domain\Teams\Models\Team[] $teams
 * @property-read int|null $teams_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\CreatyDev\Domain\Ticket\Models\Ticket[] $tickets
 * @property-read int|null $tickets_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\Laravel\Passport\Token[] $tokens
 * @property-read int|null $tokens_count
 * @property-read \CreatyDev\Domain\Users\Models\TwoFactor $twoFactor
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\User filter($request, $filters = [])
 * @method static bool|null forceDelete()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\User newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\User newQuery()
 * @method static \Illuminate\Database\Query\Builder|\CreatyDev\Domain\Users\Models\User onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\User query()
 * @method static bool|null restore()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\User whereActivated($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\User whereCardBrand($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\User whereCardLastFour($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\User whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\User whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\User whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\User whereFirstName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\User whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\User whereLastName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\User wherePassword($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\User wherePhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\User whereProfileImage($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\User whereRememberToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\User whereStripeId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\User whereTrialEndsAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\User whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\User whereUsername($value)
 * @method static \Illuminate\Database\Query\Builder|\CreatyDev\Domain\Users\Models\User withTrashed()
 * @method static \Illuminate\Database\Query\Builder|\CreatyDev\Domain\Users\Models\User withoutTrashed()
 */
	class User extends \Eloquent {}
}

namespace CreatyDev\Domain\Users\Models{
/**
 * CreatyDev\Domain\Users\Models\UserRole
 *
 * @property int $id
 * @property int $user_id
 * @property int $role_id
 * @property \Illuminate\Support\Carbon|null $expires_at
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\UserRole newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\UserRole newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\UserRole query()
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\UserRole whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\UserRole whereExpiresAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\UserRole whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\UserRole whereRoleId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\UserRole whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CreatyDev\Domain\Users\Models\UserRole whereUserId($value)
 */
	class UserRole extends \Eloquent {}
}

