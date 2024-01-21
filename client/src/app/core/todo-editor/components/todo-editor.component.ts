import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-todo-editor',
  templateUrl: './todo-editor.component.html',
  styleUrls: ['./todo-editor.component.scss']
})
export class TodoEditorComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TodoEditorComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private fb: FormBuilder) {
  }

  public editForm = this.fb.group({
    taskName: ['', Validators.required],
    taskDescription: ['', Validators.maxLength(50)],
    taskSeverety: ['', Validators.required],
    taskCompleted: [false]
  });

  public taskSeverety = ['Low', 'Medium', 'High'];
  public isLoading = false;

  ngOnInit() {
    this.editForm.patchValue(this.data.todoData);
  }

  onCancel() {
    this.dialogRef.close();
  }

  onEditSubmit() {
    if (this.editForm.valid) {
      this.isLoading = true;
      // simulate form submission
      setTimeout(() => {
        this.isLoading = false;
        this.dialogRef.close(this.editForm.value);
      }, 2000);
    } else {
      // show error messages
      Object.keys(this.editForm.controls).forEach(field => {
        const control = this.editForm.get(field);
        control.markAsTouched({ onlySelf: true });
      });
    }
  }
}
