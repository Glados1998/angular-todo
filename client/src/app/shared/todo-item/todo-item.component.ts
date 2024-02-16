import {Component, Input} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {TodoModalComponent} from "../todo-modal/todo-modal.component";
import {TodoServiceService} from "../../core/services/todo-service.service";
import {Todo} from "../../core/interfaces/todo";

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
        this.todoService.updateTodo(id, result).subscribe({
          next: (data: any) => {
            this.todoItems = this.todoItems.map((todo: { id: number; }) => todo.id === data.id ? data : todo);
          },
          error: (error: any) => {
            console.error('There was an error!', error);
          }
        })
      }
    });
  }

  // Delete the task
  deleteTask(id: number) {
    this.todoService.deleteTodo(id).subscribe({
      next: (data: any) => {
        // Remove the task from the todoItems
        this.todoItems = this.todoItems.filter((todo: { id: number; }) => todo.id !== id);
      },
      error: (error: any) => {
        console.error('There was an error!', error);
      }
    });
  }

  markAsComplete(id: number) {
    // Get the current todo item
    const currentTodo = this.todoItems.find((todo: { id: number; }) => todo.id === id);

    // Update the isComplete property
    const updatedTodo = { ...currentTodo, isComplete: true };

    this.todoService.completeTodo(id, updatedTodo).subscribe({
      next: (data: any) => {
        console.log(updatedTodo)
        this.todoItems = this.todoItems.map((todo: { id: number; }) => todo.id === data.id ? { ...todo, isComplete: true } : todo);
      },
      error: (error: any) => {
        console.error('There was an error!', error);
      }
    });
  }

  markAsIncomplete(id: number) {
    // Get the current todo item
    const currentTodo = this.todoItems.find((todo: { id: number; }) => todo.id === id);

    // Update the isComplete property
    const updatedTodo = { ...currentTodo, isComplete: false };

    this.todoService.updateTodo(id, updatedTodo).subscribe({
      next: (data: any) => {
        this.todoItems = this.todoItems.map((todo: { id: number; }) => todo.id === data.id ? { ...todo, isComplete: false } : todo);
      },
      error: (error: any) => {
        console.error('There was an error!', error);
      }
    });
  }

}
