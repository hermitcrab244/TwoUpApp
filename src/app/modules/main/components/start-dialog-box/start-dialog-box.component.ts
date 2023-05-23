import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-start-dialog-box',
  templateUrl: './start-dialog-box.component.html',
  styleUrls: ['./start-dialog-box.component.scss'],
})
export class StartDialogBoxComponent implements OnInit {
  form: FormGroup;
  name!: string;

  constructor(
    public dialogRef: MatDialogRef<StartDialogBoxComponent>,
    private formBuilder: FormBuilder
  ) {
    //Builds form and sets fields as required
    this.form = formBuilder.group({
      name: ['', [Validators.required]],
      theme: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  onPlay() {
    //Submits form if both fields are populated
    if (this.form.valid) {
      this.dialogRef.close(this.form);
    }
  }
}
