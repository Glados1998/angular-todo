import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  todoList: any = [];

  // Receive the todoFormValue from the todoForm component and push it to the todoList
  reveivedTodoFormValue(todoFormValue: object ) {
    this.todoList.push(todoFormValue);
  }

}
