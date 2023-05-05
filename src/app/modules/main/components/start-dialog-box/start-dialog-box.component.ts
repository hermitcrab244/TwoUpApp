import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-start-dialog-box',
  templateUrl: './start-dialog-box.component.html',
  styleUrls: ['./start-dialog-box.component.scss'],
})
export class StartDialogBoxComponent implements OnInit {
  @Output() playerName = new EventEmitter<string>();

  form: FormGroup;
  name!: string;

  constructor(
    public dialogRef: MatDialogRef<StartDialogBoxComponent>,
    private formBuilder: FormBuilder
  ) {
    this.form = formBuilder.group({
      name: ['', [Validators.required]],
      theme: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  onPlay() {
    if (this.form.valid) {
      this.name = this.form.get('name')?.value;
      this.playerName.emit(this.name);
      console.log('Dialog check: ' + this.name);
      this.dialogRef.close();
    }
  }
}
