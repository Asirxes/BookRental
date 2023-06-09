import { Component } from '@angular/core';

@Component({
  selector: 'app-xml-page',
  templateUrl: './xml-page.component.html',
  styleUrls: ['./xml-page.component.css']
})
export class XmlPageComponent {
  selectedFile!: File;

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  exportXML() {
    const xmlData = '<root><element1>Value 1</element1><element2>Value 2</element2></root>';
    const xmlFile = new File([xmlData], 'exported.xml', { type: 'text/xml' });
    saveAs(xmlFile);
  }
}
function saveAs(xmlFile: File) {
  throw new Error('Function not implemented.');
}

