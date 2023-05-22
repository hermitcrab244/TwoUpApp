import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from 'src/app/modules/shared/material.module';
import { GameComponent } from './game.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeAll(() => {
    jasmine.clock().install();
  });

  afterAll(() => {
    jasmine.clock().uninstall();
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialModule, BrowserAnimationsModule],
      declarations: [GameComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize component properties', () => {
    expect(component.heads).toBe('Heads');
    expect(component.tails).toBe('Tails');
    expect(component.coinHeads).toBe(
      '../../../../../assets/images/20c-heads.png'
    );
    expect(component.coinTails).toBe(
      '../../../../../assets/images/20c-tails.png'
    );
  });

  it('should set playerChoice, gameMessage, and disable select buttons on playerSelected', () => {
    component.playerSelected('Heads');
    expect(component.playerChoice).toBe('Heads');
    expect(component.gameMessage).toBe('You guessed Heads');
    expect(component.tossDisabled).toBe(false);
    expect(component.selectDisabled).toBe(true);

    component.playerSelected('Tails');
    expect(component.playerChoice).toBe('Tails');
    expect(component.gameMessage).toBe('You guessed Tails');
    expect(component.tossDisabled).toBe(false);
    expect(component.selectDisabled).toBe(true);
  });

  it('should play a round and emit game results', () => {
    // Set up initial conditions
    component.playerChoice = 'Heads';
    component.coin1 = 'Heads';
    component.coin2 = 'Tails';
    component.gameMessage = '';
    component.tossDisabled = true;
    component.selectDisabled = false;

    // Subscribe to the gameResults event emitter
    let emittedResults: any;
    component.gameResults.subscribe((results: any) => {
      emittedResults = results;

      // Call the playRound method
      component.playRound();

      // Verify the expected changes
      expect(component.isAnimating).toBe(true);
      expect(component.tossDisabled).toBe(true);
      expect(component.selectDisabled).toBe(false);

      // Advance time to simulate the coin toss animation
      jasmine.clock().tick(2000);

      // Verify the coin flip results and game message
      component.flipCoins('headsOdds');
      expect(component.coin1).toBe(
        '../../../../../assets/images/20c-heads.png'
      );
      expect(component.coin2).toBe(
        '../../../../../assets/images/20c-tails.png'
      );
      expect(component.gameMessage).toBe('Flip was Odd, try again!');

      // Advance time to simulate the delay after the coin flip
      jasmine.clock().tick(2000);

      //Verify the emitted game results
      expect(emittedResults.results).toBe('headsOdds');
      expect(emittedResults.outcome).toBe('');
    });
  });
  it('should flip the coins and enable select buttons', () => {
    // Set up initial conditions
    component.tossDisabled = true;
    component.selectDisabled = false;

    // Call the flipCoins method with different results
    component.flipCoins('Heads');
    expect(component.coin1).toBe('../../../../../assets/images/20c-heads.png');
    expect(component.coin2).toBe('../../../../../assets/images/20c-heads.png');
    expect(component.tossDisabled).toBe(true);
    expect(component.selectDisabled).toBe(false);

    component.flipCoins('Tails');
    expect(component.coin1).toBe('../../../../../assets/images/20c-tails.png');
    expect(component.coin2).toBe('../../../../../assets/images/20c-tails.png');
    expect(component.tossDisabled).toBe(true);
    expect(component.selectDisabled).toBe(false);

    component.flipCoins('headsOdds');
    expect(component.coin1).toBe('../../../../../assets/images/20c-heads.png');
    expect(component.coin2).toBe('../../../../../assets/images/20c-tails.png');
    expect(component.tossDisabled).toBe(true);
    expect(component.selectDisabled).toBe(false);

    component.flipCoins('tailsOdds');
    expect(component.coin1).toBe('../../../../../assets/images/20c-tails.png');
    expect(component.coin2).toBe('../../../../../assets/images/20c-heads.png');
    expect(component.tossDisabled).toBe(true);
    expect(component.selectDisabled).toBe(false);
  });

  it('should emit game results', () => {
    spyOn(component.gameResults, 'emit');

    component.sendResults('Heads', 'win');
    expect(component.gameResults.emit).toHaveBeenCalledWith({
      results: 'Heads',
      outcome: 'win',
    });

    component.sendResults('Tails', 'lose');
    expect(component.gameResults.emit).toHaveBeenCalledWith({
      results: 'Tails',
      outcome: 'lose',
    });
  });

  it('should set isAnimating to true and then false after a delay', () => {
    expect(component.isAnimating);
  });
});
