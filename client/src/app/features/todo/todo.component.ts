import {Component} from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  todoList: any = [];

  // Receive the todoFormValue from the todoForm component and push it to the todoList
  reveivedTodoFormValue(todoFormValue: object) {
    this.todoList.push(todoFormValue);
  }


}
