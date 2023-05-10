import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss'],
})
export class ScoreboardComponent implements OnChanges {
  @Input() results: string = '';
  @Input() outcome: string = '';
  @Input() name: string = '';

  Score = 0;
  Choice = '';
  headsCount = 0;
  tailsCount = 0;
  oddsCount = 0;

  ngOnChanges() {
    if (this.outcome === 'win') {
      this.Score++;
    }

    switch (this.results) {
      case 'Heads':
        this.headsCount++;
        break;
      case 'Tails':
        this.tailsCount++;
        break;
      case 'headsOdds':
        this.oddsCount++;
        break;
      case 'tailsOdds':
        this.oddsCount++;
        break;
      default:
        break;
    }
  }
}
