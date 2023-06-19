<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Game;
use Illuminate\Support\Facades\DB;


class IsolationController extends Controller
{
    public function repeatale()
    {

        $pdo = DB::connection('projekt')->getPdo();
        $pdo->exec('SET TRANSACTION ISOLATION LEVEL REPEATABLE READ');

        DB::beginTransaction('projekt');

        echo Book::all()->count();

        echo "WAITING...";
        sleep(20);

        echo Book::all()->count();

        DB::commit('projekt');


    }

    public function committed()
    {

        $pdo = DB::connection()->getPdo();
        $pdo->exec('SET TRANSACTION ISOLATION LEVEL READ COMMITTED');

        DB::beginTransaction();

        echo User::all();

        echo "WAITING...";
        sleep(20);

        echo User::all();

        DB::commit();


    }


    public function uncommitted()
    {
        $pdo = DB::connection()->getPdo();
        $pdo->exec('SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED');

        DB::beginTransaction("B");

        echo User::all()->count();

        echo "WAITING...";
        sleep(20);

        echo User::all()->count();

        DB::commit("B");
    }
}