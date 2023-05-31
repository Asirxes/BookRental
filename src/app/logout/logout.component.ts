import { Component } from '@angular/core';
import { EmptyUserInfoDto, IUserInfoDto } from '../interfaces/IUserInfoDto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  protected user: IUserInfoDto = EmptyUserInfoDto();
  login: string;
  authHttpService: any;
  localStorageService: any;

  constructor(
     // private authHttpService: AuthHttpService,
      //private localStorageService: LocalStorageService,
      private router: Router
  ) {
      this.login ="AsiaK"
  }

  async ngOnInit() {

  }

  protected logout = () => {
      this.authHttpService.logoutUser().subscribe({
          next: async (result: boolean) => {
              if(result) {
                  this.localStorageService.removeUser();
                  await this.router.navigateByUrl("/First");
              }
          },
          error: async (error: any) => {
              if(error.status === 401) {
                  this.localStorageService.removeUser();
                  await this.router.navigateByUrl("/First");
              }
          }
      });
  }

}

