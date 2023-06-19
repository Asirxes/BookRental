<?php

namespace App\Http\Controllers;

use DOMDocument;
use Illuminate\Http\Request;
use SimpleXMLElement;
use SoapClient;
use GuzzleHttp\Client;

class SOAPController extends Controller
{
    function fetchData(Request $request)
    {
        $operation = $request->input('operation'); //Add,Substract,Divide,Multiply
    $intA = $request->input('intA');
    $intB = $request->input('intB');


        $client = new Client([
            'base_uri' => 'http://www.dneonline.com',
            'timeout' => 10,
            'headers' => [
                'Content-Type' => 'text/xml; charset=utf-8',
                'SOAPAction' => "http://tempuri.org/$operation",
            ],
        ]);


        $requestBody = <<<XML
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <$operation xmlns="http://tempuri.org/">
      <intA>$intA</intA>
      <intB>$intB</intB>
    </$operation>
  </soap:Body>
</soap:Envelope>
XML;

        $response = $client->post('/calculator.asmx', ['body' => $requestBody]);

        $statusCode = $response->getStatusCode();
        $responseBody = $response->getBody()->getContents();

        $dom = new DOMDocument();
        $dom->loadXML($responseBody);

        $combinedString = $operation."Result";
        
        $addResult = $dom->getElementsByTagNameNS('http://tempuri.org/', $combinedString)->item(0)->nodeValue;
        
        return $addResult;
    }


}