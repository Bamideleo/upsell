<?php

namespace App\Http\Controllers;

use App\Hero;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Mail;

class HeroController extends Controller
{
    public function index()
    {
        $heros  = Hero::with(['weapon' => function($query){
        }])->get();
            return Inertia::render('Users/Index', [
                'heros' =>$heros,
            ]);
        
       
       
    }

    public function get_hero_number_weapon(){
        $weapons  = Hero::withCount(['weapon' => function($query){
        }])->get();

        return Inertia::render('Users/Weapon', [
                'weapons' =>$weapons,
            ]);
        
    }

    public function create()
    {
        return Inertia::render('Users/Create');
    }


    public function saveHero(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'health' => 'required',
        ]);
        $name=$request->name;
        $email ='admin@test.com';
        $inputs=['name'=>$name,'email'=>$email];
        
        Hero::create([
            'name' => $request->name,
            'health' => $request->health,
        ]);
        
        Mail::send('heroweapon', $inputs, function ($message) use ($name,$email) {
                  
            $message->from('hero@test.com', $name = "Hero");
            $message->subject("Welcome New Hero", $name = null);
            $message->to($email, $name = null);
            
       
    });

        return redirect()->route('heros.index')->with('successMessage', 'Hero was successfully added!');
    }

    public function edit(Hero $user)
    {
        return Inertia::render('Users/Edit', [
            'hero' => $user,
        ]);
    }

    public function update(Request $request, Hero $user)
    {
        $request->validate([
            'name' => 'required',
            'health'  =>  'required',
        ]);

        $user->update([
            'name' => $request->name,
            'health' => $request->health
        ]);

        return redirect()->route('heros.index')->with('successMessage', 'Hero was successfully updated!');
    }

    public function destroy(Hero $user)
    {
        $user->delete();

        return redirect()->route('heros.index')->with('successMessage', 'Hero was successfully deleted!');
    }

}
