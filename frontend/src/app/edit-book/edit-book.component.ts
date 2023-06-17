import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { dbService } from '../services/dbService';
import { MatSnackBar } from '@angular/material/snack-bar';

interface Book {
  title: string;
  author: string;
  price: number;
  coverImageUrl: string;
  id: number;
  description: string;
}

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css'],
})
export class EditBookComponent implements OnInit {
  editBookForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private dbService: dbService,
    private snackBar: MatSnackBar
  ) {
    this.editBookForm = this.formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      description: [''],
      coverImageUrl: ['', Validators.required],
      price: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getBookDetails();
  }

  getBookDetails() {
    const bookId = this.route.snapshot.paramMap.get('id');
    if (bookId) {
      this.dbService.getBookDetails(bookId).subscribe(
        (result: Object) => {
          this.editBookForm.patchValue(result as Book);
        },
        (error: any) => {
          console.log('Wystąpił błąd podczas pobierania szczegółów książki:', error);
        }
      );
    }
  }

  onSubmit() {
    if (this.editBookForm.valid) {
      const updatedBookData = this.editBookForm.value;
      const bookId = this.route.snapshot.paramMap.get('id');
      if (bookId) {
        this.dbService.updateBook(bookId, updatedBookData).subscribe(
          (response: any) => {
            console.log('Książka została zaktualizowana:', response);
            this.snackBar.open('Książka została zaktualizowana', 'Zamknij', {
              duration: 2000, // Czas trwania alertu w milisekundach
            });
            this.router.navigate(['/books']);
          },
          (error: any) => {
            console.log('Wystąpił błąd podczas aktualizowania książki:', error);
            this.snackBar.open('Wystąpił błąd podczas aktualizowania książki', 'Zamknij', {
              duration: 2000, // Czas trwania alertu w milisekundach
            });
          }
        );
      }
    }
  }
}
