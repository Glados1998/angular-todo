import { Injectable } from '@angular/core';
import {Iuser} from "../interfaces/iuser";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(credentials: Iuser) {
     console.log('login', credentials)
  }

  logout(id: number) {
    // logic to logout
  }

  register(credentials: Iuser) {
    // logic to register
  }

  isAuthenticated(id: number) {
    // logic to check if user is authenticated
  }

  getUser(id: number) {
    // logic to get user
  }

  deleteUser(id: number) {
    // logic to delete user
  }

}
