import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Chart from 'chart.js/dist/core/core.controller';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  @ViewChild('myChart') myChartRef!: ElementRef;
  chartData: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchChartData();
  }

  fetchChartData() {
    this.http.get('API_URL').subscribe((data: any) => {
      // Przetwarzanie danych otrzymanych z API
      this.chartData = data;
      this.generateChart();
    });
  }

  generateChart() {
    const labels = this.chartData.labels;
    const data = this.chartData.data;

    // Wygenerowanie wykresu
    // Możesz skorzystać z biblioteki Chart.js lub innej biblioteki do generowania wykresów

    // Przykładowe użycie biblioteki Chart.js
    const canvas = this.myChartRef.nativeElement as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'My Chart',
          data: data,
          backgroundColor: 'rgba(0, 123, 255, 0.5)',
          borderColor: 'rgba(0, 123, 255, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
