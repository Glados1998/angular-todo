import {Injectable} from '@angular/core';
import {IUser} from "../interfaces/iuser";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) {
  }

  private apiUrl = 'http://localhost:5292/angular-todo-api/auth';

  register(credentials: IUser): Observable<any> {
    return this.http.post(this.apiUrl + '/register', credentials);

  }

  login(credentials: IUser): Observable<any> {
    return this.http.post(this.apiUrl + '/login', credentials);
  }

  logout(id: number) {
    // logic to logout
  }

  getUser(id: number) {
    // logic to get user
  }

  deleteUser(id: number) {

  }

}
