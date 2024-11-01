import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { WordsComponent } from './words/words.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [JsonPipe, WordsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
