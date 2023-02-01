import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-todo-editor',
  templateUrl: './todo-editor.component.html',
  styleUrls: ['./todo-editor.component.scss']
})
export class TodoEditorComponent {

  constructor(public dialogRef: MatDialogRef<TodoEditorComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  taskSeverety = ['Low', 'Medium', 'High'];

  editForm = new FormGroup({
    taskName: new FormControl(null, Validators.required),
    taskDescription: new FormControl(null),
    taskSeverety: new FormControl(null, [Validators.required]),
  });

  onCancel() {
    this.dialogRef.close();
  }

  onEditSubmit() {
    this.dialogRef.close(this.editForm.value);
  }
}
