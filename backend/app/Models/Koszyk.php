<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Koszyk extends Model
{
    use HasFactory;

    protected $table = 'koszyks'; 

    protected $fillable = [
        'email',
        'id_book',
    ];

    protected $primaryKey = 'email';
}
