<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
    return view('welcome');
});
Route::get('/gerar-xml-blog-padrao', function () {
    return view('blog.gerar-xml-padrao-hb');
});
Route::get('/gerar-xml-blog', function () {
    return view('blog.gerar_xml');
});
Route::get('/aula-7', function () {
    return view('aula7');
});
Route::get('/aula-8', function () {
    return view('aula8');
});
