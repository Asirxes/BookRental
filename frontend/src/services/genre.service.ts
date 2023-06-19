import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  getGenreById(genreId: string) {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'https://openlibrary.org/dev/docs/api/books';

  constructor(private http: HttpClient) { }

  getGenres() {
    return this.http.get(this.apiUrl);
  }
}
