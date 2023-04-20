import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1 [class.with-border]="withBorder">
      {{ title }}
    </h1>
    <button (click)="onButtonClick()">
      {{ withBorder ? 'Hide' : 'Show' }} border
    </button>
    <app-hi [text]="title"></app-hi>
    <app-hello></app-hello>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'hello-world-app-component';
  textColor = 'tomato';
  withBorder = true;
  onButtonClick() {
    this.withBorder = !this.withBorder;
    this.title = 'Da change1';
  }
}
