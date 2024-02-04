import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, Validators} from "@angular/forms";
import {Todo} from "../interfaces/todo";
import {TodoServiceService} from "../services/todo-service.service";

@Component({
  selector: 'app-todo-modal',
  templateUrl: './todo-modal.component.html',
  styleUrls: ['./todo-modal.component.scss']
})
export class TodoModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TodoModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private fb: FormBuilder,
              private todoService: TodoServiceService) {
  }

  public editForm = this.fb.group({
    id: this.data.todoId,
    title: ['', Validators.required],
    description: ['', Validators.maxLength(50)],
    severity: ['', Validators.required],
    isCompleted: [false]
  });

  public severity = ['low', 'medium', 'high'];
  public isLoading = false;

  ngOnInit() {
    console.log(this.data.todoId)
    if (this.data.todoId) {
      this.todoService.getTodoById(this.data.todoId).subscribe((data: Todo) => {
        console.log(data)
        this.editForm.patchValue(data);
      });
    }
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
        control.markAsTouched({onlySelf: true});
      });
    }
  }
}
