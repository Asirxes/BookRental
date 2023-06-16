import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../services/usersService';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  required: any;

  constructor(formBuilder: FormBuilder,private usersService: UsersService,private router: Router,private snackBar: MatSnackBar) { 
    this.registrationForm = formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl ('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required])
    }, { validator: this.passwordMatchValidator, asyncValidators:[], updateOn:'change'});
  }

  ngOnInit() {}

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

      const email = this.registrationForm.get('email')?.value;
      const password = this.registrationForm.get('password')?.value;

      //console.log('Rejestracja użytkownika:', email, password);

      this.registrationForm.reset();

      this.usersService.zarejestruj(email,password).subscribe(response => {
        let token = response as Config
        if(token.token){
          localStorage.setItem('logged','true');
          localStorage.setItem('token',token.token);
          this.router.navigate(['']);
        }else{
          localStorage.setItem('logged','false');
          this.snackBar.open('Spróbuj ponownie', 'Zamknij', {
            duration: 2000, // Czas trwania alertu w milisekundach
          });
        }
        LoginComponent.myEventEmitter.emit();
        
      });
    }
  }
}

export interface Config {
  token: string;
}