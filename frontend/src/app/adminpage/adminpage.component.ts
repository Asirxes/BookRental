import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit{
  xmlBooks: any[] = [];
  jsonBooks: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchXmlBooks();
    this.fetchJsonBooks();
  }

  fetchXmlBooks() {
    this.http.get('API_URL/xmlBooks').subscribe((data: any) => {
      this.xmlBooks = data;
    });
  }

  fetchJsonBooks() {
    this.http.get('API_URL/jsonBooks').subscribe((data: any) => {
      this.jsonBooks = data;
    });
  }
}

