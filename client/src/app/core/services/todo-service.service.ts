import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Todo} from "../interfaces/todo";



@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  private todos: Todo[] = [];
  private todos$ = new BehaviorSubject<Todo[]>(this.todos);

  constructor() { }

  getTodos() {
    return this.todos$.asObservable();
  }

  addTodo(todo: any) {
    this.todos.push(todo);
    this.todos$.next(this.todos);
  }

  updateTodo(index: number, updatedTodo: any) {
    this.todos[index] = updatedTodo;
    this.todos$.next(this.todos);
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
    this.todos$.next(this.todos);
  }

  completeTodo(index: number) {
    this.todos[index].taskCompleted =!this.todos[index].taskCompleted;
    this.todos$.next(this.todos);
  }
}
