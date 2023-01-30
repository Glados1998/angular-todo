import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {


  @Input() todoItems: any;

  editTask() {
    console.log(this.todoItems.taskName)
  }


  deleteTask() {
    console.log('delete task')
  }

  completeTask() {
    console.log('complete task')
  }
}
