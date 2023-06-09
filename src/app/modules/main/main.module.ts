import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { GameComponent } from './components/game/game.component';
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';
import { MaterialModule } from '../shared/material.module';
import { StartDialogBoxComponent } from './components/start-dialog-box/start-dialog-box.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MainPageComponent,
    GameComponent,
    ScoreboardComponent,
    StartDialogBoxComponent,
  ],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule, FormsModule],
  exports: [MainPageComponent, StartDialogBoxComponent],
})
export class MainModule {}
