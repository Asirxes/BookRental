<?php

namespace App\Http\Controllers;

use Google\Client;
use Illuminate\Http\Request;

class BooksController extends Controller
{
    public function index()
    {
        $client = new Client();
        $client->setDeveloperKey(env('GOOGLE_BOOKS_API_KEY'));

        $service = new \Google_Service_Books($client);

        $response = $service->volumes->listVolumes('books');

        $books = $response->getItems();

        $bookData = [];

        foreach ($books as $book) {
            $bookId = $book->getId();

            $bookDetails = $service->volumes->get($bookId);

            $volumeInfo = $bookDetails->getVolumeInfo();

            $title = $volumeInfo->getTitle();

            $publishers = $volumeInfo->getAuthors();

            $bookData[] = [
                'title' => $title,
                'publishers' => $publishers,
            ];
        }

        return response()->json($bookData);
    }

    public function test()
    {
        return "bbb";
    }
}