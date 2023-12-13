import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoEditorComponent } from './components/todo-editor.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    TodoEditorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  exports: [
    TodoEditorComponent
  ]
})
export class TodoEditorModule { }
