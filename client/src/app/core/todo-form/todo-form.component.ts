import {Component, OnInit} from '@angular/core';
import {Validators, FormBuilder} from "@angular/forms";
import {TodoServiceService} from "../services/todo-service.service";
import {Todo} from "../interfaces/todo";

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent{

  constructor(
    private todoService: TodoServiceService,
    private _fb: FormBuilder
  ) {}

  severity = ['Low', 'Medium', 'High'];
  todoForm = this._fb.group({
    title: ['', Validators.required],
    description: '',
    severity: ['', Validators.required],
    isCompleted: [false]
  });


  onSubmit() {
  if (this.todoForm.valid) {
    this.todoService.addTodo(this.todoForm.value as Todo).subscribe( {
      next: (data: any) => {
        console.log('Todo added successfully', data);
      },
      error: (error: any) => {
        console.error('There was an error!', error);
      }
    })
    this.todoForm.reset();
  } else {
    let invalidFields = [];
    Object.keys(this.todoForm.controls).forEach(key => {
      if (this.todoForm.controls[key].invalid) {
        invalidFields.push(key);
      }
    });
    alert('Please fill out the following fields: ' + invalidFields.join(', '));
  }
}

}
