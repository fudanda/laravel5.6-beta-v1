<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Autnenticatable;

class User extends Autnenticatable
{
    public function job()
    {
        return $this->hasMany('App\Models\Job');
    }
}