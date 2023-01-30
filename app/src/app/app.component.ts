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
    this.todoList.push(todoFormValue);
    console.log(todoFormValue)
    console.log(this.todoList);
  }

}
