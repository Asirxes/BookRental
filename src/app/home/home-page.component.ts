// import { Component, OnInit } from '@angular/core';
// import { BookService } from '../book.service';
// import { GenreService } from '../genre.service';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home-page.component.html',
//   styleUrls: ['./home-page.component.css']
// })
// export class HomeComponent implements OnInit {
//   genres: any[] | undefined;
//   books: any[] | undefined;
//   selectedGenre: any;
//   selectedBook: any;

//   constructor(private genreService: GenreService, private bookService: BookService) { }

//   ngOnInit() {
//     this.getGenres();
//     this.getBooks();
//   }

//   getGenres() {
//     /*this.genreService.getGenres().subscribe(
//       (data: any[]) => {
//         this.genres = data;
//       },
//       (error) => {
//         console.log(error);
//       }
//     );*/
//   }

//   getBooks() {
//    /* this.bookService.getBooks().subscribe(
//       (data: any[]) => {
//         this.books = data;
//       },
//       (error) => {
//         console.log(error);
//       }
//     );*/
//   }

//   showGenreDetails(genre: any) {
//     this.selectedGenre = genre;
//     this.selectedBook = null;
//   }

//   showBookDetails(book: any) {
//     this.selectedBook = book;
//     this.selectedGenre = null;
//   }
// }
import { Component } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { dbService } from '../services/dbService';

interface Book {
  title: string;
  author: string;
  price: number;
  coverImageUrl: string;
  id: number;
  description: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomeComponent {
  books: Book[] = [

  ];

  

  addToCart(book: Book) {
    
  }
  constructor(public authService: AuthService,private dbService: dbService) {
    this.dbService.getDane().subscribe(result=> {
      this.books = result as Book[];
    }
      
      );
  }

  logout(): void {
    this.authService.logout();
  }
}
