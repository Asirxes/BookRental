import { Component } from '@angular/core';
import { SoapService } from '../services/soapService';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  number1: number = 0;
  number2: number = 0;
  result: number | undefined;

  constructor(private saopService:SoapService){

  }

  add() {
    this.saopService.fetchData("Add",this.number1,this.number2).subscribe(wynik=>{
      this.result = wynik as number
    })
  }

  subtract() {
    this.saopService.fetchData("Subtract",this.number1,this.number2).subscribe(wynik=>{
      this.result = wynik as number
    })
  }

  multiply() {
    this.saopService.fetchData("Multiply",this.number1,this.number2).subscribe(wynik=>{
      this.result = wynik as number
    })
  }

  divide() {
    this.saopService.fetchData("Divide",this.number1,this.number2).subscribe(wynik=>{
      this.result = wynik as number
    })
  }

}
