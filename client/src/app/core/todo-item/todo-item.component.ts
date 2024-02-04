import {Component, Input} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {TodoModalComponent} from "../todo-modal/todo-modal.component";
import {TodoServiceService} from "../services/todo-service.service";
import {Todo} from "../interfaces/todo";

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


  editTask(id: number) {
    // Open the dialog
    const dialogRef = this.dialog.open(TodoModalComponent, {
      width: '500px',
      data: {
        todoId: id,
      }
    });

    // After the dialog is closed
    dialogRef.afterClosed().subscribe((result: Todo) => {
      if (result) {
        // Update the task
        this.todoService.updateTodo(id, result).subscribe((data: any) => {
          // Update the todoItems
          this.todoItems = this.todoItems.map((todo: { id: number; }) => {
            if (todo.id === data.id) {
              return data;
            }
            return todo;
          });
        });
      }
    });
  }

  // Delete the task
  deleteTask(id: number) {
    this.todoService.deleteTodo(id).subscribe((data: any) => {
      this.todoItems = this.todoItems.filter((todo: { id: number; }) => todo.id !== id);
    });
  }

  // Mark the task as completed
  completeTask(id: number) {
    this.todoService.completeTodo(id).subscribe((data: any) => {
      this.todoItems = this.todoItems.map((todo: { id: number; }) => {
        if (todo.id === data.id) {
          return data;
        }
        return todo;
      });
    });
  }
}
