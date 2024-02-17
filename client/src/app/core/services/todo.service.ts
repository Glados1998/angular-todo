import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Todo} from "../interfaces/todo";
import {interval, switchMap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl = 'http://localhost:5292/api';

  constructor(private http: HttpClient) {
  }

  watchTodo() {
    return interval(1000).pipe(switchMap(() => this.getTodos()));
  }

  getTodos() {
    return this.http.get<Todo[]>(`${this.apiUrl}/todo`);
  }

  getTodoById(id: number) {
    return this.http.get<Todo>(`${this.apiUrl}/todo/${id}`);
  }

  addTodo(data: Todo) {
    return this.http.post<Todo>(`${this.apiUrl}/todo`, data);
  }

  updateTodo(id: number, updatedData: Todo) {
    return this.http.put<Todo>(`${this.apiUrl}/todo/${id}`, updatedData);
  }

  deleteTodo(id: number) {
    return this.http.delete(`${this.apiUrl}/todo/${id}`);
  }

  completeTodo(id: number, updatedData: Todo) {
    return this.http.put<Todo>(`${this.apiUrl}/todo/${id}`, updatedData);
  }
}
