import {Component, Inject} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-todo-editor',
  templateUrl: './todo-editor.component.html',
  styleUrls: ['./todo-editor.component.scss']
})
export class TodoEditorComponent {

  constructor(public dialogRef: MatDialogRef<TodoEditorComponent>) {
  }

  @Inject('todoData') public todoData: any;
  taskSeverety = ['Low', 'Medium', 'High'];

  onCancel() {
    this.dialogRef.close();
  }

  onEditSubmit() {
    console.log('onEditSubmit')
    console.log(this.todoData)
  }
}
