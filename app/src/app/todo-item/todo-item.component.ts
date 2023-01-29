import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {

  constructor() {
    this.todoItems = [];
  }
  @Input() todoItems: object[];

  editTask() {
    console.log('edit task')
  }


  deleteTask() {
    console.log('delete task')
  }

  completeTask() {
    console.log('complete task')
  }
}
