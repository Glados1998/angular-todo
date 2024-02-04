import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Todo} from "../interfaces/todo";

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  private apiUrl = 'http://localhost:5292/api';

  constructor(private http: HttpClient) {
  }

  getTodos() {
    return this.http.get<Todo[]>(`${this.apiUrl}/todo`);
  }

  getTodoById(id: number) {
    return this.http.get<Todo>(`${this.apiUrl}/todo/${id}`);
  }

  addTodo(data: Todo) {
    console.log(data)
    return this.http.post<Todo>(`${this.apiUrl}/todo`, data);
  }

  updateTodo(id: number, updatedData: Todo) {
    console.log(updatedData)
    return this.http.put<Todo>(`${this.apiUrl}/todo/${id}`, updatedData);
  }

  deleteTodo(id: number) {
    console.log(id)
    return this.http.delete(`${this.apiUrl}/todo/${id}`);
  }

  completeTodo(id: number) {
    console.log(id)
    return this.http.put(`${this.apiUrl}/todo/${id}`, {isCompleted: true});
  }
}
