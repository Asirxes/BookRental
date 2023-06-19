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

        return json_encode($array);
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

    public function addXMLtoXML(Request $request)
{
    $xmlString = file_get_contents($this->xmlFile);
    $content = $request->input('xml');

    if ($xmlString && $content) {
        $newXml = simplexml_load_string($content);
        
        if ($newXml) {
            $existingXml = new \DOMDocument();
            $existingXml->preserveWhiteSpace = false;
            $existingXml->formatOutput = true;
            $existingXml->loadXML($xmlString);

            foreach ($newXml->children() as $child) {
                $domChild = dom_import_simplexml($child);
                $domChild = $existingXml->importNode($domChild, true);
                $existingXml->documentElement->appendChild($domChild);
            }

            $xmlString = $existingXml->saveXML();
            file_put_contents($this->xmlFile, $xmlString);
        }
    }
}






    public function exportXML()
    {
        $xmlString = file_get_contents($this->xmlFile);

        return response($xmlString)
            ->header('Content-Type', 'text/xml');
    }
}