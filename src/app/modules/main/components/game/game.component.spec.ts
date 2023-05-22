import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from 'src/app/modules/shared/material.module';
import { GameComponent } from './game.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

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

  it('should update game message and enable/disable buttons when player selects a choice', () => {
    component.playerSelected('Heads');
    fixture.detectChanges();

    expect(component.playerChoice).toEqual('Heads');
    expect(component.gameMessage).toEqual('You guessed Heads');
    expect(component.tossDisabled).toBeFalse();
    expect(component.selectDisabled).toBeTrue();
  });

  it('should perform coin toss, update game message and show coin faces accordingly', () => {
    spyOn(component, 'flipAnimation');
    const expectedResults = 'Heads';
    const expectedOutcome = 'win';

    component.playerChoice = 'Heads';
    component.playRound();
    fixture.detectChanges();

    expect(component.flipAnimation).toHaveBeenCalled();
    expect(component.coin1).toContain('heads');
    expect(component.coin2).toContain('heads');

    // Simulate the delay for the coin flip animation
    setTimeout(() => {
      expect(component.gameMessage).toContain(expectedResults);
      expect(component.sendResults).toHaveBeenCalledWith(
        expectedResults,
        expectedOutcome
      );
    }, 2000);
  });

  it('should generate correct coin faces for the coin toss', () => {
    spyOn(Math, 'random').and.returnValues(0.3, 0.7); // Mock Math.random() to return fixed values

    component.playerChoice = 'Heads';
    component.playRound();
    fixture.detectChanges();

    expect(component.coin1).toContain('heads');
    expect(component.coin2).toContain('tails');
  });
});
