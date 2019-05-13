<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Article_Type extends Model
{
    //
    public function article()
    {
        return $this->hasMany('App\Models\Article_Type');
    }
}
