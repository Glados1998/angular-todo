import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TodoItemComponent } from './todo-item/todo-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoFormComponent,
    TodoItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
