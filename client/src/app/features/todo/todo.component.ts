import {Component} from '@angular/core';
import {TodoServiceService} from "../../core/services/todo-service.service";
import {FormBuilder} from "@angular/forms";
import {Todo} from "../../core/interfaces/todo";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {

  constructor(
    private todoService: TodoServiceService,
  ) {}

  todos: Todo[] = [];

  ngOnInit() {
    this.todoService.getTodos().subscribe((todos: Todo[]) => {
      this.todos = todos;
    });
    console.log(this.todos)
  }

}
