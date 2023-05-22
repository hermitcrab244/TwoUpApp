import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from 'src/app/modules/shared/material.module';
import { ScoreboardComponent } from './scoreboard.component';

describe('ScoreboardComponent', () => {
  let component: ScoreboardComponent;
  let fixture: ComponentFixture<ScoreboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [ScoreboardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ScoreboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize component properties', () => {
    expect(component.score).toBe(0);
    expect(component.headsCount).toBe(0);
    expect(component.tailsCount).toBe(0);
    expect(component.oddsCount).toBe(0);
  });

  it('should update the score when the outcome is "win"', () => {
    component.outcome = 'win';
    component.ngOnChanges();
    expect(component.score).toBe(1);
  });

  it('Score should not update on "lose"', () => {
    component.outcome = 'lose';
    component.score = 1;
    component.ngOnChanges();
    expect(component.score).toBe(1);
  });

  it('should update the count based on the results', () => {
    component.results = 'Heads';
    component.ngOnChanges();
    expect(component.headsCount).toBe(1);
    expect(component.tailsCount).toBe(0);
    expect(component.oddsCount).toBe(0);

    component.results = 'Tails';
    component.ngOnChanges();
    expect(component.headsCount).toBe(1);
    expect(component.tailsCount).toBe(1);
    expect(component.oddsCount).toBe(0);

    component.results = 'headsOdds';
    component.ngOnChanges();
    expect(component.headsCount).toBe(1);
    expect(component.tailsCount).toBe(1);
    expect(component.oddsCount).toBe(1);

    component.results = 'tailsOdds';
    component.ngOnChanges();
    expect(component.headsCount).toBe(1);
    expect(component.tailsCount).toBe(1);
    expect(component.oddsCount).toBe(2);

    component.results = 'InvalidResult';
    component.ngOnChanges();
    expect(component.headsCount).toBe(1);
    expect(component.tailsCount).toBe(1);
    expect(component.oddsCount).toBe(2);
  });
});
