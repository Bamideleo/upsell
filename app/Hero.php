<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Hero extends Model
{
    protected $guarded=[];

    public function weapon()
    {
        return $this->belongsToMany(Weapon::class);
    }
}
