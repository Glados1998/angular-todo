import {Component, Input} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {TodoEditorComponent} from "../todo-editor/todo-editor.component";
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {


  @Input() todoItems: any;
  constructor(private dialog: MatDialog) {
  }


  //
  editTask(todoIndex: number) {
    console.log(todoIndex)
    console.log(this.todoItems[todoIndex])

    let dialogRef = this.dialog.open(TodoEditorComponent, {
      width: '300px',
      data: {todoData: this.todoItems[todoIndex]}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.todoItems[todoIndex] = result;
      }
    });
  }

  deleteTask(todoIndex: number) {
    if (window.confirm('Are you sure you want to delete the task:' + this.todoItems[todoIndex]['taskName']+ ' ?')) {
      this.todoItems.splice(todoIndex, 1);
    }
  }

  completeTask(todoIndex: number) {
    if (window.confirm('Are you sure you want to complete the task:' + this.todoItems[todoIndex]['taskName']+ ' ?')) {
      this.todoItems.splice(todoIndex, 1)
    }
  }
}
