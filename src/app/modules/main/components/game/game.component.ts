import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent {
  heads = 'Heads';
  tails = 'Tails';

  coinHeads = '../../../../../assets/images/20c-heads.png';
  coinTails = '../../../../../assets/images/20c-tails.png';
  coin1 = this.coinHeads;
  coin2 = this.coinTails;
  playerChoice = '';
  gameMessage = '';

  @Output() gameResults = new EventEmitter<{
    results: string;
    outcome: string;
  }>();

  playerSelected(choice: string) {
    this.playerChoice = choice;
    this.gameMessage = 'You guessed ' + this.playerChoice;
  }

  playRound() {
    //Generate result for each coin
    const coin1 = Math.random() < 0.5 ? this.heads : this.tails;
    const coin2 = Math.random() < 0.5 ? this.heads : this.tails;
    let results = '';
    let outcome = '';

    //Sets result of the coin toss
    if (coin1 === coin2) {
      results = coin1;
    } else if (coin1 === 'Heads' && coin1 !== coin2) {
      results = 'headsOdds';
    } else if (coin1 === 'Tails' && coin1 !== coin2) {
      results = 'tailsOdds';
    }

    this.flipCoins(results);

    if (results === this.playerChoice) {
      this.gameMessage = 'Flip was ' + results + ', you guessed correct!';
      outcome = 'win';
    } else if (results === 'headsOdds' || results === 'tailsOdds') {
      this.gameMessage = 'Flip was Odd, try again!';
    } else {
      this.gameMessage =
        'Flip was ' + results + ', you guessed wrong! Try again!';
      outcome = 'lose';
    }

    this.sendResults(results, outcome);
  }

  flipCoins(results: string) {
    switch (results) {
      case 'Heads':
        this.coin1 = this.coinHeads;
        this.coin2 = this.coinHeads;
        break;
      case 'Tails':
        this.coin1 = this.coinTails;
        this.coin2 = this.coinTails;
        break;
      case 'headsOdds':
        this.coin1 = this.coinHeads;
        this.coin2 = this.coinTails;
        break;
      case 'tailsOdds':
        this.coin1 = this.coinTails;
        this.coin2 = this.coinHeads;
        break;
      default:
        break;
    }
  }

  sendResults(results: string, outcome: string) {
    console.log('This works');
    this.gameResults.emit({ results: results, outcome: outcome });
  }
}
