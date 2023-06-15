<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use SoapClient;

class SOAPController extends Controller
{
    public function fetchData()
    {
        $soapUrl = 'http://webservices.daehosting.com/services/isbnservice.wso'; // Adres URL API SOAP

        // Inicjalizacja klienta SOAP
        $soapClient = new SoapClient(null, [
            'location' => $soapUrl,
            'uri' => $soapUrl,
            'trace' => 1,
            'cache_wsdl' => WSDL_CACHE_NONE
        ]);

        // Wywołanie metody API SOAP
        $response = $soapClient->getData();

        // Przetworzenie odpowiedzi
        $data = $this->processResponse($response);

        // Zwrócenie danych jako odpowiedź JSON
        return response()->json($data);
    }

    private function processResponse($response)
    {
        // Przetwarzanie odpowiedzi z API SOAP i konwersja na format danych, który jest oczekiwany przez aplikację

        // Przykładowe przetwarzanie odpowiedzi:
        $processedData = [];

        foreach ($response->items as $item) {
            $processedData[] = [
                'id' => $item->id,
                'name' => $item->name,
                'price' => $item->price
            ];
        }

        return $processedData;
    }
}
