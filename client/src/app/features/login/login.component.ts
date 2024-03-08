import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../../core/services/auth.service";
import {IUser} from "../../core/interfaces/iuser";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(
    private authService: AuthService,
    private _fb: FormBuilder
  ) {
  }

  loginForm = this._fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value as IUser).subscribe({
        next: (data: any) => {
          console.log('Login successful', data);
        },
        error: (error: any) => {
          console.error('There was an error!', error);
        }
      })
    } else {
      alert('Please fill out the following fields: ' + Object.keys(this.loginForm.controls).join(', '));
    }
  }

}
