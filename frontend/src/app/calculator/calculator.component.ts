import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  number1: number = 0;
  number2: number = 0;
  result: number | undefined;

  add() {
    this.result = this.number1 + this.number2;
  }

  subtract() {
    this.result = this.number1 - this.number2;
  }

  multiply() {
    this.result = this.number1 * this.number2;
  }

  divide() {
    if (this.number2 !== 0) {
      this.result = this.number1 / this.number2;
    } else {
      this.result = undefined;
    }
  }

  calculate() {
    // Additional calculations or logic can be added here if needed
  }
}
