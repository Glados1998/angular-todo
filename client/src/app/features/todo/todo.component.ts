import {Component, OnInit} from '@angular/core';
import {TodoService} from "../../core/services/todo.service";
import {Todo} from "../../core/interfaces/todo";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent implements OnInit {

  constructor(
    private todoService: TodoService,
  ) {}

  todos: Todo[] = [];

  ngOnInit() {
    this.todoService.watchTodo().subscribe({
      next: (data: Todo[]) => {
        this.todos = data;
      },
      error: (error: any) => {
        console.error('There was an error!', error);
      }
    });
  }
}
