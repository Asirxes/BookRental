<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Models\Gatunek;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class DatabaseController extends Controller
{
    public function getAllBooks()
    {
        $books = DB::table('books')->get();

        return response()->json($books);
    }

    public function getBookDetails(Request $request)
    {
        // Walidacja danych wejściowych
        $validatedData = $request->validate([
            'id' => 'required|integer',
        ]);

        try {
            // Znajdowanie książki o podanym ID
            $book = Book::findOrFail($validatedData['id']);

            // Zwracanie odpowiedzi z danymi książki
            return response()->json($book);
        } catch (\Exception $e) {
            // Obsługa błędu - książka nie została znaleziona
            return response()->json(['message' => 'Książka o podanym ID nie istnieje'], 404);
        }
    }

    public function addBooks(Request $request)
{   
    // Walidacja danych wejściowych
    $validatedData = $request->validate([
        'title' => 'required',
        'author' => 'required',
        'description' => 'required',
        'coverImageUrl' => 'required',
        'price' => 'required',
    ]);
        // Tworzenie nowej książki
        $book = Book::create([
            'title' => $validatedData['title'],
            'author' => $validatedData['author'],
            'description' => $validatedData['description'],
            'coverImageUrl' => $validatedData['coverImageUrl'],
            'price' => $validatedData['price'],
        ]);

        // Zwracanie odpowiedzi z dodaną książką
        return response()->json($book, 201);
    
}

public function editBook(Request $request)
    {
        

        $validatedData = $request->validate([
            'id' => 'required',
            'title' => 'required',
            'author' => 'required',
            'description' => 'required',
            'coverImageUrl' => 'required',
            'price' => 'required',
        ]);

        try {
            $book = Book::findOrFail($validatedData['id']);

            $book->update([
                'title' => $validatedData['title'],
                'author' => $validatedData['author'],
                'description' => $validatedData['description'],
                'coverImageUrl' => $validatedData['coverImageUrl'],
                'price' => $validatedData['price'],
            ]);

            return response()->json($book);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Książka o podanym ID nie istnieje'], 404);
        }
    }

    public function deleteBook(Request $request)
    {
        $validatedData = $request->validate([
            'id' => 'required|integer',
        ]);
    
        try {
            $book = Book::findOrFail($validatedData['id']);
            $book->delete();
    
            return response()->json(['message' => 'Książka została pomyślnie usunięta']);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Książka o podanym ID nie istnieje'], 404);
        }
    }

    public function getGenres()
{
    $genres = Gatunek::pluck('nazwa')->all();

    return response()->json($genres);
}
}