import { Component } from '@angular/core';
import { XMLService } from '../services/xmlService';

@Component({
  selector: 'app-xml-page',
  templateUrl: './xml-page.component.html',
  styleUrls: ['./xml-page.component.css'],
})
export class XmlPageComponent {
  selectedFile: File | null = null;

  constructor(private xmlService: XMLService) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  exportXML() {
    this.xmlService.exportXML();
  }

  importXML() {
    if (this.selectedFile) {
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        const xmlContent = fileReader.result;
        this.xmlService.addXmlToXml(<string>xmlContent);
        this.selectedFile = null;
      };
      fileReader.readAsText(this.selectedFile);
    }
  }
}
