import { Component } from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "../../core/services/auth.service";
import {Iuser} from "../../core/interfaces/iuser";

@Component({
  selector: 'app-registration',
  standalone: true,
    imports: [
        ReactiveFormsModule
    ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {

  constructor(
    private authService: AuthService,
    private _fb: FormBuilder
  ) {}

  registerForm = this._fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  });

  onSubmit() {
    if (this.registerForm.valid && this.registerForm.value.password === this.registerForm.value.confirmPassword) {
      this.authService.register(this.registerForm.value as Iuser);
      console.log('Registration successful', this.registerForm.value);
      this.registerForm.reset();
    } else {
      alert('Passwords do not match');
    }
  }

}
