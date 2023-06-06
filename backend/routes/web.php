<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BooksController;
use App\Http\Controllers\OpenController;
use App\Http\Controllers\XMLController;
use App\Http\Controllers\JSONController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/books/index', [BooksController::class, 'index']);
Route::get('/books/test', [BooksController::class, 'test']);

Route::get('/open', [OpenController::class, 'index']);

Route::get('/XML/getBooks', [XMLController::class, 'getBooks']);

Route::post('/XML/addBooks', [XMLController::class, 'addBooks']);

Route::get('/JSON/getBooks', [JSONController::class, 'getBooks']);

Route::post('/JSON/addBooks', [JSONController::class, 'addBooks']);