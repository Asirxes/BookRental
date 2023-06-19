import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { dbService } from '../services/dbService';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css'],
})
export class AddBookComponent {
  addBookForm: FormGroup;

  genreOptions: string[] = ["bb", "aa"];

  constructor(private formBuilder: FormBuilder, private dbService: dbService) {
    this.addBookForm = this.formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      description: ['', Validators.required],
      coverImageUrl: ['', Validators.required],
      price: ['', Validators.required],
      genre: ['', Validators.required], // Dodaj pole 'genre' do formularza
    });

    this.dbService.getGenres().subscribe(result => {
      this.genreOptions = result as string[];
    })
  }

  onSubmit() {
    if (this.addBookForm.valid) {
      const { title, author, description, coverImageUrl, price, genre } = this.addBookForm.value; // Dodaj 'genre' do destrukturyzacji
      this.dbService.addBooks(title, author, description, coverImageUrl, price, genre).subscribe(
        (response: any) => {
          console.log('Książka została dodana:', response);
          this.addBookForm.reset();
        },
        (error: any) => {
          console.log('Wystąpił błąd podczas dodawania książki:', error);
        }
      );
    }
  }
}
