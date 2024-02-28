import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../../core/services/auth.service";
import {Iuser} from "../../core/interfaces/iuser";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(
    private authService: AuthService,
    private _fb: FormBuilder
  ) {}

  loginForm = this._fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value as Iuser);
    } else {
      alert('Please fill out the following fields: ' + Object.keys(this.loginForm.controls).join(', '));
    }
  }

}
