import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../../core/services/auth.service";
import {IUser} from "../../core/interfaces/iuser";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {

  constructor(
    private authService: AuthService,
    private _fb: FormBuilder
  ) {
  }

  registerForm = this._fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  });

  onSubmit() {
    if (this.registerForm.valid && this.registerForm.value.password === this.registerForm.value.confirmPassword) {
      this.authService.register(this.registerForm.value as IUser).subscribe({
        next: (data: any) => {
          console.log('Registration successful', data);
        },
        error: (error: any) => {
          console.error('There was an error!', error);
        }
      })

    } else {
      alert('Passwords do not match');
    }
  }

}
