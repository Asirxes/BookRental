<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Response;

class UsersController extends Controller
{
    public function register(Request $request)
    {
        // Walidacja danych wejściowych
        $validatedData = $request->validate([
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6',
        ]);

        // Tworzenie nowego użytkownika
        $user = new User();
        $user->email = $validatedData['email'];
        $user->password = Hash::make($validatedData['password']);
        $user->save();

        // Generowanie tokenu JWT
        $token = JWTAuth::fromUser($user);

        // Zwracanie odpowiedzi z tokenem JWT
        return response()->json(['token' => $token], 201);
    }

    public function changePassword(Request $request)
    {
        // Walidacja danych wejściowych
        $validatedData = $request->validate([
            'newPassword' => 'required|min:6',
            'token' => 'required',
        ]);

        try {
            // Dekodowanie tokenu JWT i pobranie użytkownika
            $token = $validatedData['token'];
            $user = JWTAuth::parseToken()->authenticate();
        } catch (\Exception $e) {
            return response()->json(['message' => 'Nieprawidłowy token'], 401);
        }

        // Zmiana hasła użytkownika
        $user->password = Hash::make($validatedData['newPassword']);
        $user->save();

        return response()->json(['message' => 'Hasło zostało zmienione.']);
    }

    public function login(Request $request)
    {
        // Walidacja danych wejściowych
        $validatedData = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        // Sprawdzenie poprawności danych logowania
        if (!Auth::attempt($validatedData)) {
            return response()->json(['message' => 'Nieprawidłowy email lub hasło'], 401);
        }

        // Generowanie tokenu JWT
        $token = JWTAuth::attempt($validatedData);

        // Zwracanie odpowiedzi z tokenem JWT
        return response()->json(['token' => $token], 200);
    }

    public function getAllUsersWithKoszyks()
{
    $users = User::all(); // Pobranie wszystkich użytkowników

    $result = []; // Tablica wynikowa

    foreach ($users as $user) {
        $email = $user->email;
        $books = DB::table('koszyks')
            ->join('books', 'koszyks.id_book', '=', 'books.id')
            ->where('koszyks.email', $email)
            ->pluck('books.title') // Pobranie nazw książek
            ->toArray();

        $result[$email] = $books; // Dodanie do tablicy wynikowej: email => lista nazw książek
    }

    return response()->json($result);
}

function checkAdmin(Request $request)
{
    $token = $request->input('token');

    try {
        $user = JWTAuth::parseToken()->authenticate();

        if ($user->isAdmin()) {
            return true;
        }
    } catch (\Exception $e) {
    }

    return false;
}
}
