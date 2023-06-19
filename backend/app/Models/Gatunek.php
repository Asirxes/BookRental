<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Gatunek extends Model
{
    protected $table = 'gatuneks'; // Nazwa tabeli w bazie danych

    protected $primaryKey = 'id'; // Nazwa klucza głównego

    protected $fillable = ['nazwa']; // Lista kolumn, które mogą być uzupełniane

    public $timestamps = false; // Jeżeli nie potrzebujesz kolumn z datą utworzenia/aktualizacji

    // Dodatkowe metody i relacje w modelu Gatunek
}
