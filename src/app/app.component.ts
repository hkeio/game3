import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { MathComponent } from './math/math.component';
import { WordsComponent } from './words/words.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [JsonPipe, WordsComponent, MathComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
