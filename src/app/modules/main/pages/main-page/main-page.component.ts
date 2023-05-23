import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { StartDialogBoxComponent } from '../../components/start-dialog-box/start-dialog-box.component';
import { FormGroup } from '@angular/forms';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  startDialogRef!: MatDialogRef<StartDialogBoxComponent>;

  constructor(public dialog: MatDialog) {}

  //Sets types  of all variables used within game
  results!: string;
  outcome!: string;
  name!: string;
  themeSelect!: string;
  score!: number;

  ngOnInit() {
    //On page load displays dialog box
    //On close gets results from form
    this.startDialogRef = this.dialog.open(StartDialogBoxComponent);

    this.startDialogRef.afterClosed().subscribe((result: FormGroup) => {
      this.name = result.get('name')?.value;
      this.themeSelect = result.get('theme')?.value;
    });
  }

  sendResults(results: string, outcome: string) {
    //Gets results from page component
    this.results = results;
    this.outcome = outcome;
  }

  sendScore(score: number) {
    //Gets the score from the scoreboard
    this.score = score;
  }

  writeFile() {
    //Writes score and player name to text file
    const fileText =
      'Thank you ' +
      this.name +
      ' for playing the Two-Up game! You got a score of ' +
      this.score;
    const blob = new Blob([fileText], { type: 'text/plain;charset=utf-8' });
    FileSaver.saveAs(blob, 'TwoUpResults.txt');
  }

  endGame() {
    //Calls method to record results from round
    this.writeFile();
  }
}
