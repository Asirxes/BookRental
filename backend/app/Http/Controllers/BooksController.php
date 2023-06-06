<?php

namespace App\Http\Controllers;

use Google\Client;
use Illuminate\Http\Request;

class BooksController extends Controller
{
    public function index()
    {
        // Tworzenie klienta Google API
        $client = new Client();
        $client->setDeveloperKey(env('GOOGLE_BOOKS_API_KEY'));

        // Inicjalizacja obiektu usługi Google Books
        $service = new \Google_Service_Books($client);

        // Wykonanie zapytania do Google Books API
        $response = $service->volumes->listVolumes('books');

        // Pobranie listy książek
        $books = $response->getItems();

        // Utworzenie pustej tablicy na dane książek
        $bookData = [];

        // Dodawanie informacji o książkach do tablicy
        foreach ($books as $book) {
            $bookData[] = [
                'title' => $book->getVolumeInfo()->getTitle(),
                'author' => $book->getVolumeInfo()->getAuthors(),
                // Dodaj inne potrzebne dane z obiektu książki
            ];
        }

        // Zwracanie listy książek jako odpowiedź JSON
        return response()->json($bookData);
    }
}
