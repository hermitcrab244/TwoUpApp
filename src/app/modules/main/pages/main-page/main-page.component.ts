import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { StartDialogBoxComponent } from '../../components/start-dialog-box/start-dialog-box.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  @Output() sendPlayerName = new EventEmitter<string>();

  dialogRef!: MatDialogRef<StartDialogBoxComponent>;

  constructor(public dialog: MatDialog) {}

  results!: string;
  outcome!: string;
  name!: string;

  ngOnInit() {
    this.dialogRef = this.dialog.open(StartDialogBoxComponent);

    this.dialogRef.afterClosed().subscribe(() => {
      this.dialogRef.componentInstance.playerName.subscribe((name: string) => {
        this.name = name;
        console.log('Parent check: ' + name);
        this.sendPlayerName.emit(this.name);
      });
    });
  }

  sendResults(results: string, outcome: string) {
    this.results = results;
    this.outcome = outcome;
  }
}
