<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class DatabaseController extends Controller
{
    public function getAllBooks()
    {
        $books = DB::table('books')->get();
        
        return response()->json($books);
    }
}