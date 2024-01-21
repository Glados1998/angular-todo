import {Component, Input} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {TodoEditorComponent} from "../todo-editor/todo-editor.component";
import {TodoServiceService} from "../services/todo-service.service";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {

  // Get the todoItems from the parent component
  @Input() todoItems: any;

  constructor(
    private dialog: MatDialog,
    private todoService: TodoServiceService,
  ) {
  }


  editTask(todoIndex: number) {

    // Open the dialog and pass the todoItem to the dialog
    let dialogRef = this.dialog.open(TodoEditorComponent, {
      width: '300px',
      data: {todoData: this.todoItems[todoIndex]}
    });

    // When the dialog is closed, update the todoItem
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.todoService.updateTodo(todoIndex, result);
      }
    });
  }

  // Delete the task
  deleteTask(todoIndex: number) {
    if (window.confirm('Are you sure you want to delete the task:' + this.todoItems[todoIndex]['taskName'] + ' ?')) {
      this.todoService.deleteTodo(todoIndex);
    }
  }

  // Mark the task as completed
  completeTask(todoIndex: number) {
    this.todoService.completeTodo(todoIndex);
  }
}
