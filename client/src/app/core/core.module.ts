import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoItemComponent} from "./todo-item/todo-item.component";
import {TodoModalComponent} from "./todo-modal/todo-modal.component";
import {ReactiveFormsModule} from "@angular/forms";
import {TodoFormComponent} from "./todo-form/todo-form.component";


@NgModule({
  declarations: [
    TodoItemComponent,
    TodoModalComponent,
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
