import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SoapService {
    private apiUrl = 'http://127.0.0.1:8000/SOAP';

    constructor(private http: HttpClient) {}

    fetchData(operation: string,intA: number,intB: number){
        const body = {
            operation: operation,
            intA: intA,
            intB: intB
        }
        return this.http.post(`${this.apiUrl}/fetchData`, body);
    }
}
