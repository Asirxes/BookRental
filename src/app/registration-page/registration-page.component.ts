import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IRegisterUserWithPasswordDto } from '../interfaces/IRegisterUserWithPasswordDto';
import { IUserInfoDto } from '../interfaces/IUserInfoDto';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit{
  protected registerForm: FormGroup;
  authHttpService: any;
  localStorageService: any;

  constructor(
      formBuilder: FormBuilder,
      private router: Router,
      //private authHttpService: AuthHttpService,
      //private localStorageService: LocalStorageService
  ) {
      this.registerForm = formBuilder.group(
        {
          login: new FormControl('', [
            Validators.required,
            Validators.minLength(5)
        ]),
          hasło: new FormControl('', [
            Validators.required,
            Validators.minLength(5)
        ]),
          powtórzhasło: new FormControl('', [
            Validators.required,
            Validators.minLength(5),
        ]),
        },
        {
          validator: this.powtórzhasłowalidator
        }
    );
}

  ngOnInit() {
  }

  protected registerUser = () => {
    if (this.registerForm.valid) {
      const registerUserDto: IRegisterUserWithPasswordDto = this.registerForm.value;

      this.authHttpService
        .registerUser(registerUserDto)
        .subscribe({
          next: async (userInfo: IUserInfoDto) => {
            this.localStorageService.setUser(userInfo);
            await this.router.navigateByUrl("/First");
          },
          error: (error: any) => {
            if (error.error.status === 400) {
              const errors: Array<any> = error.error.errors;
                if("login" in errors) {
                  this.registerForm.get("login")?.setErrors({loginTaken: true});
                }
                if("hasło" in errors) {
                  this.registerForm.get("login")?.setErrors({toShortPassword: true});
                }
                if("powtórzhasło" in errors) {
                  this.registerForm.get("login")?.setErrors({notMatchPassword: true});
                }
            }
          }
        }
      );
    }
  }

  private powtórzhasłowalidator = (control: AbstractControl): ValidationErrors | null => {
    const hasło = control.get("hasło")
    const powtórzhasło = control.get("powtórzhasło");
    if (hasło != null && powtórzhasło != null) {
      if (hasło.value != powtórzhasło.value) {
        powtórzhasło.setErrors({incorrect: true});
        return {incorrect: {value: control.value}};
      } else {
          return null;
          }
      } else {
          return null;
      }
  }
}


