import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  results!: string;
  outcome!: string;

  sendResults(results: string, outcome: string) {
    this.results = results;
    this.outcome = outcome;
  }
}
