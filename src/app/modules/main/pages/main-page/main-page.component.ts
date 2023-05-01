import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StartDialogBoxComponent } from '../../components/start-dialog-box/start-dialog-box.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    const dialogRef = this.dialog.open(StartDialogBoxComponent);
  }

  results!: string;
  outcome!: string;

  sendResults(results: string, outcome: string) {
    this.results = results;
    this.outcome = outcome;
  }
}
