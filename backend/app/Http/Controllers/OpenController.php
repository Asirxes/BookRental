<?php

namespace App\Http\Controllers;

use Google\Client;
use Illuminate\Http\Request;

class OpenController extends Controller
{
    public function index()
    {

        $start_id = 258025;
        $end_id = 258050;
        $id = 73;
        
        $data_to_save = [];  // Array to store selected data
        
        for ($work_id = $start_id; $work_id <= $end_id; $work_id++) {
            $url = "https://openlibrary.org/works/OL{$work_id}W.json";
            $response = file_get_contents($url);
        
            if ($response !== false) {
                $data = json_decode($response, true);
        
                // Extracting "title", "subjects", and "authors"
                $title = $data["title"] ?? "";
                $subjects = $data["subjects"] ?? [];
                $authors = $data["authors"] ?? [];
        
                // Creating an array with selected data
                $selected_data = [
                    "id" => $id,
                    "title" => $title,
                    "subjects" => $subjects,
                    "authors" => $authors
                ];
                $id++;
        
                // Adding selected data to the array
                $data_to_save[] = $selected_data;
            } else {
                echo "Błąd podczas pobierania strony {$url}.";
            }
        }
        
        // Saving data to JSON file
        $file = fopen("selected_data_books8.json", "w");
        fwrite($file, json_encode($data_to_save, JSON_PRETTY_PRINT));
        fclose($file);
        
        echo "Dane zostały zapisane do pliku 'selected_data_books8.json'.";
        
        
    }
}
