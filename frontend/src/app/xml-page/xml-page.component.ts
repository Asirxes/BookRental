// import { Component } from '@angular/core';
// import { XMLService } from '../services/xmlService';

// @Component({
//   selector: 'app-xml-page',
//   templateUrl: './xml-page.component.html',
//   styleUrls: ['./xml-page.component.css'],
// })
// export class XmlPageComponent {
//   selectedFile: File | null = null;

//   constructor(private xmlService: XMLService) {}

//   onFileSelected(event: any) {
//     this.selectedFile = event.target.files[0];
//   }

//   exportXML() {
//     this.xmlService.exportXML();
//   }

//   importXML() {
//     if (this.selectedFile) {
//       const fileReader = new FileReader();
//       fileReader.onload = (e) => {
//         const xmlContent = fileReader.result;
//         this.xmlService.addXmlToXml(<string>xmlContent);
//         this.selectedFile = null;
//       };
//       fileReader.readAsText(this.selectedFile);
//     }
//   }
// }
import { Component } from '@angular/core';
import { XMLService } from '../services/xmlService';

interface Book {
  title: string | null;
  author: string | null;
  price: number | null;
  coverImageUrl: string | null;
}

@Component({
  selector: 'app-xml-page',
  templateUrl: './xml-page.component.html',
  styleUrls: ['./xml-page.component.css'],
})
export class XmlPageComponent {
  selectedFile: File | null = null;
  books: Book[] = [];

  constructor(private xmlService: XMLService) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  importXML() {
    if (this.selectedFile) {
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        const xmlContent = fileReader.result;
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlContent as string, 'application/xml');
        const bookNodes = xmlDoc.getElementsByTagName('book');
        this.books = [];
        for (let i = 0; i < bookNodes.length; i++) {
          const bookNode = bookNodes[i];
          const titleNode = bookNode.getElementsByTagName('title')[0];
          const authorNode = bookNode.getElementsByTagName('author')[0];
          const priceNode = bookNode.getElementsByTagName('price')[0];
          const coverImageUrlNode = bookNode.getElementsByTagName('coverImageUrl')[0];
          const title = titleNode ? titleNode.textContent : null;
          const author = authorNode ? authorNode.textContent : null;
          const price = priceNode ? parseFloat(priceNode.textContent || '0') : null;
          const coverImageUrl = coverImageUrlNode ? coverImageUrlNode.textContent : null;
          this.books.push({ title, author, price, coverImageUrl });
        }
      };
      fileReader.readAsText(this.selectedFile);
    }
  }

  exportXML() {
    this.xmlService.exportXML();
  }
}
