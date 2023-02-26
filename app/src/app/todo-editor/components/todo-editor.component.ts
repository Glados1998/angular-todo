import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-todo-editor',
  templateUrl: './todo-editor.component.html',
  styleUrls: ['./todo-editor.component.scss']
})
export class TodoEditorComponent implements OnInit {

  // Get the data from the parent component
  constructor(public dialogRef: MatDialogRef<TodoEditorComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  public editForm: FormGroup ;

  ngOnInit() {
    this.initForm();
  }

  // Initialize the form with the data from the parent component and set the validators
  initForm() {
    console.log(this.data)
    this.editForm = new FormGroup({
      taskName: new FormControl(this.data.todoData.taskName, Validators.required),
      taskDescription: new FormControl(this.data.todoData.taskDescription, Validators.maxLength(20)),
      taskSeverety: new FormControl(this.data.todoData.taskSeverety, [Validators.required]),
      taskCompleted: new FormControl(this.data.todoData.taskCompleted)
    });
  }

  taskSeverety = ['Low', 'Medium', 'High'];

 // Close the dialog
  onCancel() {
    this.dialogRef.close();
  }
 // Close the dialog and pass the form data to the parent component
  onEditSubmit() {
    this.dialogRef.close(this.editForm.value);
  }
}
