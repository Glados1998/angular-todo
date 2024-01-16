import {Component} from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  todoList: any = [];

  reveivedTodoFormValue(todoFormValue: object) {
    this.todoList.push(todoFormValue);
  }


}
