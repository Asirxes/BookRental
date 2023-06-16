import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../services/usersService';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registration',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.changePasswordForm = this.formBuilder.group({
      currentPassword: new FormControl('', [Validators.required]),
      newPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmNewPassword: new FormControl('', [Validators.required])
    }, { validator: this.passwordMatchValidator });
  }

  ngOnInit() {}

  passwordMatchValidator(formGroup: FormGroup) {
    const newPassword = formGroup.get('newPassword')?.value;
    const confirmNewPassword = formGroup.get('confirmNewPassword')?.value;

    if (newPassword !== confirmNewPassword) {
      formGroup.get('confirmNewPassword')?.setErrors({ passwordMismatch: true });
    } else {
      formGroup.get('confirmNewPassword')?.setErrors(null);
    }
  }

  onSubmit() {
    if (this.changePasswordForm.valid) {
      const currentPassword = this.changePasswordForm.get('currentPassword')?.value;
      const newPassword = this.changePasswordForm.get('newPassword')?.value;

      this.usersService.changePassword(currentPassword, newPassword).subscribe(response => {
        if (response.success) {
          // Jeśli zmiana hasła powiodła się
          this.router.navigate(['/login']);
          this.snackBar.open('Hasło zostało zmienione. Zaloguj się przy użyciu nowego hasła.', 'Zamknij', {
            duration: 2000
          });
        } else {
          // Jeśli zmiana hasła nie powiodła się
          this.snackBar.open('Nie udało się zmienić hasła. Spróbuj ponownie.', 'Zamknij', {
            duration: 2000
          });
        }
      });

      this.changePasswordForm.reset();
    }
  }
}
