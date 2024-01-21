import {Component} from '@angular/core';
import {Validators, FormBuilder} from "@angular/forms";
import {TodoServiceService} from "../services/todo-service.service";

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent {

  constructor(
    private todoService: TodoServiceService,
    private _fb: FormBuilder
  ) {}

  taskSeverety = ['Low', 'Medium', 'High'];
  todoForm = this._fb.group({
    taskName: '',
    taskDescription: '',
    taskSeverety: '',
    taskCompleted: [false]
  });

  onSubmit() {
    if (this.todoForm.valid) {
      this.todoService.addTodo(this.todoForm.value);
      this.todoForm.reset();
    } else {
      alert('Please fill out all fields');
    }
  }

}
