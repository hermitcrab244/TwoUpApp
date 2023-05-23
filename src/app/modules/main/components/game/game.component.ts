import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  heads = 'Heads';
  tails = 'Tails';

  coinHeads = '../../../../../assets/images/20c-heads.png'; //Sets path to heads image
  coinTails = '../../../../../assets/images/20c-tails.png'; //Sets path to tails image

  //Sets inital image
  coin1 = this.coinHeads;
  coin2 = this.coinTails;

  playerChoice = '';
  gameMessage = '';
  isAnimating = false;
  tossDisabled: boolean = true;
  selectDisabled: boolean = false;

  //Sets output that emits the events of the game
  @Output() gameResults = new EventEmitter<{
    results: string;
    outcome: string;
  }>();

  playerSelected(choice: string) {
    //Displays player choice on screen and progresses game
    this.playerChoice = choice;
    this.gameMessage = 'You guessed ' + this.playerChoice;
    this.tossDisabled = false;
    this.selectDisabled = true;
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

    //Runs coins animation
    this.flipAnimation();

    //Waits for animation to
    setTimeout(() => {}, 6000);

    setTimeout(() => {
      //Calls method to run
      this.flipCoins(results);

      //Sets results message
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

      //Calls method to send results
      this.sendResults(results, outcome);
    }, 2000);
  }

  flipCoins(results: string) {
    //Sets coins faces based upon results of the randomization
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

    //Progresses game
    this.tossDisabled = true;
    this.selectDisabled = false;
  }

  sendResults(results: string, outcome: string) {
    //Emits the results of the game
    this.gameResults.emit({ results: results, outcome: outcome });
  }

  flipAnimation() {
    //Animates coin toss
    this.isAnimating = true;
    setTimeout(() => {
      this.isAnimating = false;
    }, 2000);
  }
}
