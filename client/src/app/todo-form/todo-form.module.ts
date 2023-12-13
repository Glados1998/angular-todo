import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoFormComponent } from './components/todo-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    TodoFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    TodoFormComponent
  ]
})
export class TodoFormModule { }
