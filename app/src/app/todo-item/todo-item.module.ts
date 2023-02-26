import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TodoItemComponent} from "./components/todo-item.component";
import {TodoEditorModule} from "../todo-editor/todo-editor.module";



@NgModule({
  declarations: [
    TodoItemComponent
  ],
  imports: [
    CommonModule,
    TodoEditorModule
  ],
  exports: [
    TodoItemComponent
  ]
})
export class TodoItemModule { }
