import { Component } from '@angular/core';
import { XMLService } from '../services/xmlService';

@Component({
  selector: 'app-koszyk',
  templateUrl: './koszyk.component.html',
  styleUrls: ['./koszyk.component.css']
})
export class KoszykComponent {
  xmlService: XMLService;

  constructor(xmlService: XMLService) {
    this.xmlService = xmlService;
  }

  getKsiazki(){
    this.xmlService.getBooks();
  }
}
