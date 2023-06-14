// import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import Chart from 'chart.js/dist/core/core.controller';
import {Component, Input, OnInit} from '@angular/core';
import {ChartConfiguration, ChartData, ChartType} from "chart.js";
import DataLabelsPlugin from "chartjs-plugin-datalabels";

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  // @ViewChild('myChart') myChartRef!: ElementRef;
  // chartData: any;

  // constructor(private http: HttpClient) { }

  // ngOnInit() {
  //   this.fetchChartData();
  // }

  // fetchChartData() {
  //   this.http.get('API_URL').subscribe((data: any) => {
  //     this.chartData = data;
  //     this.generateChart();
  //   });
  // }

  @Input() public barChartOptions: ChartConfiguration['options'];
  @Input() public barChartData: ChartData<'bar'> = {
      labels: [],
      datasets: []
  };

  protected barChartType: ChartType = 'bar';
  protected barChartPlugins = [DataLabelsPlugin];
}
