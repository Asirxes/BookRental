<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array<int, string>
     */
    protected $except = [
        '/XML/addBooks',
        '/XML/addXMLtoXML',
        '/JSON/addBooks',
        '/Database/addBooks',
        '/USERS/register',
        '/USERS/login',
        '/Cart/addBookToCart',
        '/Cart/removeBooksById',
        '/Cart/removeAllTestEmailBooks'
    ];
}
