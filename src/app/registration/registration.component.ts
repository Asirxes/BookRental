import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  required: any;

  constructor(formBuilder: FormBuilder) { 
    this.registrationForm = formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl ('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required])
    }, { validator: this.passwordMatchValidator, asyncValidators:[], updateOn:'change'});
  }

  ngOnInit() {
    
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      formGroup.get('confirmPassword')?.setErrors({ passwordMismatch: true });
    } else {
      formGroup.get('confirmPassword')?.setErrors(null);
    }
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      // Wykonaj logikę rejestracji użytkownika
      const email = this.registrationForm.get('email')?.value;
      const password = this.registrationForm.get('password')?.value;

      // Przykładowa logika, tutaj możesz wysłać żądanie do serwera, zarejestrować użytkownika itp.
      console.log('Rejestracja użytkownika:', email, password);

      // Zresetuj formularz po zakończeniu rejestracji
      this.registrationForm.reset();
    }
  }
}
