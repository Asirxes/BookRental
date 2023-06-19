import { Component } from '@angular/core';
import { JSONService } from '../services/jsonService';

interface Book {
  title: string;
  author: string;
  price: number;
  coverImageUrl: string;
}

@Component({
  selector: 'app-json-page',
  templateUrl: './json-page.component.html',
  styleUrls: ['./json-page.component.css']
})
export class JsonPageComponent {
  selectedFile!: File;
  books: Book[] = [];

  constructor(private jsonService: JSONService) {
    jsonService.getBooks().subscribe(response=>{
      this.books = response as Book[]
    })
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  importJSON() {
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      const result = fileReader.result;
      if (typeof result === 'string') {
        const jsonData = JSON.parse(result);
         this.jsonService.addJSONtoJSON(jsonData);
      }
    };
    fileReader.readAsText(this.selectedFile);
  }

  exportJSON() {
    this.jsonService.downloadJSON();
  }
}
