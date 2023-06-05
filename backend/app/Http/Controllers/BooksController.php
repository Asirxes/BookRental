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

        // Wyświetlanie listy książek
        foreach ($books as $book) {
            echo $book->getVolumeInfo()->getTitle() . '<br>';
        }
    }
}
