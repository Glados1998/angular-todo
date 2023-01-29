import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  todoList: object[] = [];

  reveivedTodoFormValue(todoFormValue: object ) {
    console.log(todoFormValue);
    this.todoList.push(todoFormValue);
    console.log(this.todoList);
  }

}
