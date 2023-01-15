<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Weapon extends Model
{
    protected $guarded=[];
   
    public function hero()
    {
        return $this->belongsToMany(Hero::class);
    }

}
