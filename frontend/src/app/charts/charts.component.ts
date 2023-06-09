import { Component, Input, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { UsersService } from '../services/usersService';
import { dbService } from '../services/dbService';
import { Book } from '../book';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  books: Book[] = []

  constructor(private usersService: UsersService,private dbService: dbService,private router: Router,private snackBar: MatSnackBar) {
    this.usersService.checkAdmin().subscribe(result =>{
      if(result!=1){
        this.snackBar.open('Nie jesteś adminem', 'Zamknij', {
          duration: 2000, // Czas trwania alertu w milisekundach
        });
        this.router.navigateByUrl(`/`);
      }
    })

    this.dbService.getDane().subscribe(result =>{
      this.books = result as Book[]
    })
    this.usersService.getAllUsersWithKoszyks().subscribe((result) => {
      this.myData = result as KeyValueStringArray;
    });
    
  }

  redirect(data: any){
    var item = this.books.find(item=>item.title==data);
    this.router.navigateByUrl(`/book/${item?.id}`);
  }

  protected barChartType: ChartType = 'bar';
  //protected barChartPlugins = [DataLabelsPlugin];
}

interface KeyValueStringArray {
  [key: string]: string[];
}
