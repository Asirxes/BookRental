import { Component, Input, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { UsersService } from '../services/usersService';
//import DataLabelsPlugin from "chartjs-plugin-datalabels";

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
})
export class ChartsComponent {
  @Input() public barChartOptions: ChartConfiguration['options'];
  @Input() public barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: [],
  };

  myData: KeyValueStringArray = {};

  constructor(private usersService: UsersService) {
    this.usersService.getAllUsersWithKoszyks().subscribe((result) => {
      this.myData = result as KeyValueStringArray;
    });
  }

  protected barChartType: ChartType = 'bar';
  //protected barChartPlugins = [DataLabelsPlugin];
}

interface KeyValueStringArray {
  [key: string]: string[];
}
