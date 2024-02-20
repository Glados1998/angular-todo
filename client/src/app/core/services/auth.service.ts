import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(credentials: any) {
     console.log('login', credentials)
  }

  logout() {
    // logic to logout
  }

  register(credentials: any) {
    // logic to register
  }

  isAuthenticated() {
    // logic to check if user is authenticated
  }

  getUser() {
    // logic to get user
  }

  deleteUser() {
    // logic to delete user
  }

}
