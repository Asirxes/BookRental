import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent  implements OnInit{
  protected loginForm: FormGroup
  protected loginError: boolean = false;

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    //private authHttpService: AuthHttpService,
    //private localStorageService: LocalStorageService
) {
    this.loginForm = formBuilder.group({
        login: new FormControl("", [
            Validators.required,
            Validators.minLength(5)
        ]),
        hasło: new FormControl("", [
            Validators.required,
            Validators.minLength(5)
        ])
    });
}
    ngOnInit(): void {
        throw new Error('Metoda nie zaimplementowana.');
    }
  /*protected loginUser() {
    if (this.loginForm.valid) {
        const loginUserDto: ILoginUserWithPasswordDto = this.loginForm.value;
        this.authHttpService.loginUser(loginUserDto).subscribe({
            next: async (userInfo: IUserInfoDto) => {
                this.localStorageService.setUser(userInfo);
                await this.router.navigateByUrl("/First");
            },
            error: (error: any) => {
                if (error.error.status === 400) {
                    const errors: Array<any> = error.error.errors;
                    if("login" in errors) {
                        this.loginForm.controls["login"].setErrors({incorrect: true});
                    }

                    if("hasło" in errors) {
                        this.loginForm.controls["hasło"].setErrors({incorrect: true});
                    }
                }

                if(error.status === 401) {
                    this.loginError = true;
                }
            }
        });
    }
  }*/

}
