import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MainPageComponent } from './modules/main/pages/main-page/main-page.component';
import { MaterialModule } from './modules/shared/material.module';
import { ScoreboardComponent } from './modules/main/components/scoreboard/scoreboard.component';
import { GameComponent } from './modules/main/components/game/game.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MaterialModule],
      declarations: [
        AppComponent,
        MainPageComponent,
        ScoreboardComponent,
        GameComponent,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'TwoUp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('TwoUp');
  });
});
