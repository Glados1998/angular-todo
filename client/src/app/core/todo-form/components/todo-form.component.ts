import {Component, Output, EventEmitter} from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent {

  taskSeverety = ['Low', 'Medium', 'High'];
  todoForm = new FormGroup({
    taskName: new FormControl('', Validators.required),
    taskDescription: new FormControl('', Validators.maxLength(20)),
    taskSeverety: new FormControl('', [Validators.required]),
    taskCompleted: new FormControl(false)
  });

  @Output() todoFormSubmit = new EventEmitter<object>();

  onSubmit() {
    this.todoFormSubmit.emit(this.todoForm.value);
    this.todoForm.reset();
  }

}
