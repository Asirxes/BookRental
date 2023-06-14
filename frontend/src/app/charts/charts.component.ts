import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  chartData: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchChartData();
  }

  fetchChartData() {
    this.http.get('API_URL').subscribe((data: any) => {
      // Przetwarzanie danych otrzymanych z API
      this.chartData = data;
      this.generateCharts();
    });
  }

  generateCharts() {
    // Generowanie wykresów na podstawie danych
    // Skorzystaj z biblioteki Chart.js
  }
}
