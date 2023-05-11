import {
  Component,
  Input,
  OnChanges,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss'],
})
export class ScoreboardComponent implements OnChanges {
  @Input() results: string = '';
  @Input() outcome: string = '';
  @Input() name: string = '';
  @Output() sendScore = new EventEmitter<number>();

  score = 0;
  headsCount = 0;
  tailsCount = 0;
  oddsCount = 0;

  ngOnChanges() {
    if (this.outcome === 'win') {
      this.score++;
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
    this.sendScore.emit(this.score);
  }
}
