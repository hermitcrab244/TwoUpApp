import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-start-dialog-box',
  templateUrl: './start-dialog-box.component.html',
  styleUrls: ['./start-dialog-box.component.scss'],
})
export class StartDialogBoxComponent implements OnInit {
  form = new FormGroup({});

  constructor(
    public dialogRef: MatDialogRef<StartDialogBoxComponent>,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      option: ['', Validators.required],
    });
  }

  ngOnInit() {}

  onPlay(): void {
    if (this.form.valid) {
      this.dialogRef.close();
    }
  }
}
