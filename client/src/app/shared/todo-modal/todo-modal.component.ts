import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, Validators} from "@angular/forms";
import {TodoService} from "../../core/services/todo.service";
import {Todo} from "../../core/interfaces/todo";

@Component({
  selector: 'app-todo-modal',
  templateUrl: './todo-modal.component.html',
  styleUrls: ['./todo-modal.component.scss']
})
export class TodoModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TodoModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private fb: FormBuilder,
              private todoService: TodoService) {
  }

  public editForm = this.fb.group({
    id: this.data.todoId,
    title: ['', Validators.required],
    description: ['', Validators.maxLength(50)],
    severity: ['', Validators.required],
    isCompleted: [false]
  });

  public severity = ['Low', 'Medium', 'High'];
  public isLoading = false;

  ngOnInit() {
    if (this.data.todoId) {
      this.todoService.getTodoById(this.data.todoId).subscribe({
        next: (data: Todo) => {
          this.editForm.patchValue(data);
        },
        error: (error: any) => {
          console.error('There was an error!', error);
        }
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
