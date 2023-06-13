<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\Koszyk; // Załóżmy, że używasz modelu Koszyk

class CartController extends Controller
{
    public function addBookToCart(Request $request)
    {
        $book = new Koszyk;
        $book->email = "test@gmail.com";
        $book->id_book = $request->input('id_book');
        $book->save();

        return response()->json(['message' => 'Książka została dodana do koszyka.']);
    }

    public function getBooksFromCart(Request $request)
    {
        $books = DB::table('koszyks')
            ->join('books', 'koszyks.id_book', '=', 'books.id')
            ->where('koszyks.email', 'test@gmail.com')
            ->select('books.*')
            ->get();

        return response()->json($books);
    }

    public function removeBooksById(Request $request)
    {
        $bookId = $request->input('id_book');

        Koszyk::where('id_book', $bookId)->delete();

        return response()->json(['message' => 'Usunięto książki z koszyka o podanym ID.']);
    }

    public function removeAllTestEmailBooks()
    {
        Koszyk::where('email', 'test@gmail.com')->delete();

        return response()->json(['message' => 'Usunięto wszystkie książki z koszyka dla adresu e-mail "test@gmail.com".']);
    }

}