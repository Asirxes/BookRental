import { Component } from '@angular/core';
import { JSONService } from '../services/jsonService';

@Component({
  selector: 'app-json-page',
  templateUrl: './json-page.component.html',
  styleUrls: ['./json-page.component.css']
})
export class JsonPageComponent {
  selectedFile!: File;

  constructor(private jsonService:JSONService){

  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  importJSON() {
    // Implementacja importu pliku JSON
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
    this.jsonService.downloadJSON()
  }
}

function saveAs(jsonFile: File) {
  throw new Error('Function not implemented.');
}
