<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UsersController extends Controller
{
    public function login(Request $request)
    {
        $email = $request->input('email');
        $password = $request->input('password');
        
        $user = User::where('email', $email)
                    ->where('password', $password)
                    ->first();
        
        if ($user) {
            return response()->json(true);
        } else {
            return response()->json(false);
        }
    }
    
    public function register(Request $request)
    {
        $email = $request->input('email');
        $password = $request->input('password');
        
        $user = new User();
        $user->email = $email;
        $user->password = $password;
        $user->save();
        
        return response()->json(true);
    }
}
