import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../services/usersService';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  static myEventEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder,private usersService: UsersService,private router: Router,private snackBar: MatSnackBar) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
   }

  ngOnInit() {}

  onSubmit() {
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;
      this.loginForm.reset();

      this.usersService.login(email,password).subscribe(result=>{
        let token = result as Config
        if (token.token) {
          localStorage.setItem('logged', 'true');
          localStorage.setItem('token', token.token);
          this.router.navigate(['']);
        }else{
          localStorage.setItem('logged','false');
          this.snackBar.open('Złe dane logowania', 'Zamknij', {
            duration: 2000, 
          });
        }
        LoginComponent.myEventEmitter.emit();
        
      })
    }
  }
  
}

export interface Config {
  token: string;
}