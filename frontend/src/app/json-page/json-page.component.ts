import { Component } from '@angular/core';

@Component({
  selector: 'app-json-page',
  templateUrl: './json-page.component.html',
  styleUrls: ['./json-page.component.css']
})
export class JsonPageComponent {
  selectedFile!: File;

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  exportJSON() {
    // Implementacja eksportu pliku JSON
    // Przykład: Tworzenie obiektu JSON i zapis do pliku
    const jsonData = {
      name: 'John Doe',
      age: 30,
      email: 'johndoe@example.com'
    };
    const jsonString = JSON.stringify(jsonData);
    const jsonFile = new File([jsonString], 'exported.json', { type: 'application/json' });
    saveAs(jsonFile);
  }
}
function saveAs(jsonFile: File) {
  throw new Error('Function not implemented.');
}

