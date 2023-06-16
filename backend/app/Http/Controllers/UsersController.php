<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use Tymon\JWTAuth\Exceptions\JWTException;
use JWTAuth;

class UsersController extends Controller
{
    public function register(Request $request)
    {
        // Walidacja danych wejściowych
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        // Tworzenie nowego użytkownika
        $user = new User();
        $user->email = $request->email;
        $user->password = $request->password;
        $user->save();

        // Generowanie JWT tokena dla nowego użytkownika
        $token = JWTAuth::fromUser($user);

        // Zwracanie odpowiedzi
        return response()->json(['token' => $token], 201);
    }

    public function login(Request $request)
    {
        // Walidacja danych wejściowych

        $user = new User();
        $user->email = $request->email;
        $user->password = $request->password;
        $token = JWTAuth::fromUser($user);

        return response()->json(['token' => $token]);
    }

    public function getAuthenticatedUser()
    {
        try {
            // Pobranie zalogowanego użytkownika
            if (!$user = JWTAuth::parseToken()->authenticate()) {
                return response()->json(['user_not_found'], 404);
            }
        } catch (JWTException $e) {
            return response()->json(['error' => 'Could not authenticate'], 500);
        }

        // Zwracanie zalogowanego użytkownika
        return response()->json(compact('user'));
    }

    public function changePassword(Request $request)
{
    // Walidacja danych wejściowych
    $validator = Validator::make($request->all(), [
        'newPassword' => 'required|string|min:6',
    ]);

    if ($validator->fails()) {
        return response()->json($validator->errors(), 400);
    }

    try {
        // Aktualizacja hasła użytkownika
        User::where('email', 'test@gmail.com')->update(['password' => $request->newPassword]);

        // Zwracanie odpowiedzi
        return response()->json(['message' => 'Password changed successfully']);
    } catch (\Exception $e) {
        return response()->json(['error' => 'Failed to change password'], 500);
    }
}


}