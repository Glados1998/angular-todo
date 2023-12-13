import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoItemComponent} from "./todo-item/components/todo-item.component";
import {TodoEditorComponent} from "./todo-editor/components/todo-editor.component";
import {ReactiveFormsModule} from "@angular/forms";
import {TodoFormComponent} from "./todo-form/components/todo-form.component";


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
