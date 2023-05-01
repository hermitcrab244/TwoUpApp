import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { GameComponent } from './components/game/game.component';
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from '../shared/material.module';
import { StartDialogBoxComponent } from './components/start-dialog-box/start-dialog-box.component';

@NgModule({
  declarations: [
    MainPageComponent,
    GameComponent,
    ScoreboardComponent,
    HeaderComponent,
    StartDialogBoxComponent,
  ],
  imports: [CommonModule, MaterialModule],
  exports: [MainPageComponent, StartDialogBoxComponent],
})
export class MainModule {}
