import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoItemComponent} from "./todo-item/todo-item.component";
import {TodoEditorComponent} from "./todo-editor/todo-editor.component";
import {ReactiveFormsModule} from "@angular/forms";
import {TodoFormComponent} from "./todo-form/todo-form.component";


@NgModule({
  declarations: [
    TodoItemComponent,
    TodoEditorComponent,
    TodoFormComponent
  ],
  exports: [
    TodoItemComponent,
    TodoFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class CoreModule {
}
