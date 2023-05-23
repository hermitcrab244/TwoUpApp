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
  //Gets results from Game Component
  @Input() results: string = '';
  @Input() outcome: string = '';

  //Listens for and sets name of player
  @Input() name: string = '';

  //Outputs score as it updates
  @Output() sendScore = new EventEmitter<number>();

  //Sets intial values
  score = 0;
  headsCount = 0;
  tailsCount = 0;
  oddsCount = 0;

  ngOnChanges() {
    //Waits for changes, if player was correct, score increments
    if (this.outcome === 'win') {
      this.score++;
    }

    //Waits for changes, updates results count
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

    //Emits the score each round
    this.sendScore.emit(this.score);
  }
}
