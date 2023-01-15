<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Weapon;
use Inertia\Inertia;

class WeaponController extends Controller
{
    
    public function index()
    {
        $weapons  = Weapon::withCount(['hero' => function($query){
        }])->get();
            // return Inertia::render('Users/Weapon', [
            //     'weapons' =>$weapons,
            // ]);
        
       
       
    }  
}
