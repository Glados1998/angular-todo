import { Component } from '@angular/core';
@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent {
  taskSeverety = ['Low', 'Medium', 'High'];

}
