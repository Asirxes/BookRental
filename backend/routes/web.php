<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BooksController;
use App\Http\Controllers\OpenController;
use App\Http\Controllers\XMLController;
use App\Http\Controllers\JSONController;
use App\Http\Controllers\DatabaseController;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\SOAPController;

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

Route::post('/XML/addXMLtoXML', [XMLController::class, 'addXMLtoXML']);

Route::get('/XML/exportXML', [XMLController::class, 'exportXML']);

Route::get('/JSON/getBooks', [JSONController::class, 'getBooks']);

Route::get('/JSON/downloadJSON', [JSONController::class, 'downloadJSON']);

Route::post('/JSON/addBooks', [JSONController::class, 'addBooks']);

Route::post('/JSON/addJSONtoJSON', [JSONController::class, 'addJSONtoJSON']);

Route::get('/DB/getAllBooks', [DatabaseController::class, 'getAllBooks']);

Route::get('/DB/getGenres', [DatabaseController::class, 'getGenres']);

Route::post('/DB/getBookDetails', [DatabaseController::class, 'getBookDetails']);

Route::post('/DB/editBook', [DatabaseController::class, 'editBook']);

Route::post('/DB/addBooks', [DatabaseController::class, 'addBooks']);

Route::post('/DB/deleteBook', [DatabaseController::class, 'deleteBook']);

Route::post('/USERS/login', [UsersController::class, 'login']);

Route::get('/USERS/getAllUsersWithKoszyks', [UsersController::class, 'getAllUsersWithKoszyks']);

Route::post('/USERS/register', [UsersController::class, 'register']);

Route::post('/Cart/addBookToCart', [CartController::class, 'addBookToCart']);

Route::post('/Cart/getBooksFromCart', [CartController::class, 'getBooksFromCart']);

Route::post('/Cart/removeBooksById', [CartController::class, 'removeBooksById']);

Route::post('/Cart/removeAllTestEmailBooks', [CartController::class, 'removeAllTestEmailBooks']);

Route::get('/SOAP/fetchData', [SOAPController::class, 'fetchData']);

Route::post('/USERS/changePassword', [UsersController::class, 'changePassword']);
