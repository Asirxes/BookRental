import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../services/book.service';
import { GenreService } from '../../services/genre.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  genreId: string | undefined;
  bookId: string | undefined;
  genre: any;
  book: any;

  constructor(
    private route: ActivatedRoute,
    private genreService: GenreService,
    private bookService: BookService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.genreId = params['genreId'];
      this.bookId = params['bookId'];

      if (this.genreId) {
        this.getGenreDetails(this.genreId);
      } else if (this.bookId) {
        this.getBookDetails(this.bookId);
      }
    });
  }

  getGenreDetails(genreId: string) {
    /*this.genreService.getGenreById(genreId).subscribe(
      (data: any ) => {
        this.genre = data;
      },
      (error: any ) => {
        console.log(error);
      }
    );*/
  }

  getBookDetails(bookId: string) {
    /*this.bookService.getBookById(bookId).subscribe(
      (data: any) => {
        this.book = data;
      },
      (error: any) => {
        console.log(error);
      }
    );*/
  }

  addToCart(book: any) {
    this.cartService.addToCart(book);
    alert('Książka dodana do koszyka!');
  }
}
