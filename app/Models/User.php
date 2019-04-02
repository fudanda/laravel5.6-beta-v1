<?php

namespace App\Models;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Autnenticatable;
use Illuminate\Database\Eloquent\Model;
use Laravel\Passpord\HasApiTokens;

class User extends Autnenticatable
{
    use Notifiable, HasApiTokens;
}
