<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;

class XMLController extends Controller
{
    private $xmlFile = '..\..\backend\database\xml\books.xml';

    public function getBooks()
    {
        $xml = simplexml_load_file($this->xmlFile);
        $json = json_encode($xml);
        $array = json_decode($json, true);

        return json_encode($array, JSON_PRETTY_PRINT);
    }

    public function addBooks(Request $request)
{
    $jsonKsiazka = $request->all();

    $xml = simplexml_load_file($this->xmlFile);

    $ksiazka = $xml->addChild('book');
    $ksiazka->addChild('title', $jsonKsiazka['title']);
    $ksiazka->addChild('author', $jsonKsiazka['author']);
    $ksiazka->addChild('description', $jsonKsiazka['description']);
    $ksiazka->addChild('coverImageUrl', $jsonKsiazka['coverImageUrl']);
    $ksiazka->addChild('price', $jsonKsiazka['price']);

    $xml->asXML($this->xmlFile);
}

}