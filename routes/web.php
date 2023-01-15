<?php

use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'foo' => 'bar',
//     ]);
// });

// Route::redirect('/', '/users');

Route::get('/about', function () {
    return Inertia::render('About', [
        'foo' => 'bar',
    ]);
});

Route::get('/contact', function () {
    return Inertia::render('Contact', [
        'foo' => 'bar',
    ]);
});

Route::get('/heros', 'HeroController@index')->name('heros.index');
Route::get('/heros/create', 'HeroController@create')->name('heros.create');
Route::post('/heros/save-hero', 'HeroController@saveHero')->name('heros.savehero');
Route::get('/heros/{user}/edit', 'HeroController@edit')->name('heros.edit');
Route::patch('/heros/{user}', 'HeroController@update')->name('heros.update');
Route::delete('/heros/{user}', 'HeroController@destroy')->name('heros.destroy');
Route::get('/weapons', 'HeroController@get_hero_number_weapon')->name('weapons.index');


Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});
