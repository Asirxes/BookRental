<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\Koszyk;
use Tymon\JWTAuth\Facades\JWTAuth; // Załóżmy, że używasz modelu Koszyk

class CartController extends Controller
{
    public function addBookToCart(Request $request)
    {
        // Weryfikacja i dekodowanie tokenu JWT
        try {
            $token = $request->input('token');
            $user = JWTAuth::parseToken()->authenticate();
            $email = $user->email;
        } catch (\Exception $e) {
            return response()->json(['message' => 'Nieprawidłowy token'], 401);
        }

        // Tworzenie nowego rekordu w koszyku
        $book = new Koszyk;
        $book->email = $email;
        $book->id_book = $request->input('id_book');
        $book->save();

        return response()->json(['message' => 'Książka została dodana do koszyka.']);
    }

    public function getBooksFromCart(Request $request)
    {
        try {
            // Dekodowanie tokenu JWT i pobranie użytkownika
            $token = $request->input('token');
            $user = JWTAuth::parseToken()->authenticate();
            $email = $user->email;
        } catch (\Exception $e) {
            return response()->json(['message' => 'Nieprawidłowy token'], 401);
        }

        $books = DB::table('koszyks')
            ->join('books', 'koszyks.id_book', '=', 'books.id')
            ->where('koszyks.email', $email)
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

    public function removeAllTestEmailBooks(Request $request)
    {
        try {
            // Dekodowanie tokenu JWT i pobranie użytkownika
            $token = $request->input('token');
            $user = JWTAuth::parseToken()->authenticate();

            // Pobranie adresu e-mail użytkownika
            $email = $user->email;

            // Usunięcie wszystkich książek z koszyka dla danego adresu e-mail (z wyjątkiem "test@gmail.com")
            Koszyk::where('email', $email)->delete();

            return response()->json(['message' => 'Usunięto wszystkie książki z koszyka dla adresu e-mail "' . $email . '".']);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Nieprawidłowy token'], 401);
        }
    }

}