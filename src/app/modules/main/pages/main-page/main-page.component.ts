import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { StartDialogBoxComponent } from '../../components/start-dialog-box/start-dialog-box.component';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  dialogRef!: MatDialogRef<StartDialogBoxComponent>;

  constructor(public dialog: MatDialog) {}

  results!: string;
  outcome!: string;
  name!: string;
  themeSelect!: string;
  score!: number;

  ngOnInit() {
    this.dialogRef = this.dialog.open(StartDialogBoxComponent);

    this.dialogRef.afterClosed().subscribe((result: FormGroup) => {
      this.name = result.get('name')?.value;
      this.themeSelect = result.get('theme')?.value;
      console.log(this.themeSelect);
    });
  }

  sendResults(results: string, outcome: string) {
    this.results = results;
    this.outcome = outcome;
  }

  sendScore(score: number) {
    this.score = score;
  }

  endGame() {
    console.log('Thank you for playing ' + this.name);
    console.log('Your score was: ' + this.score);

    setTimeout(() => {
      window.close();
    }, 2000);
  }
}
