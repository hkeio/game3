import { DOCUMENT, JsonPipe } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';
import { Word, words } from './data';

@Component({
  selector: 'app-words',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './words.component.html',
  styleUrl: './words.component.scss',
})
export class WordsComponent {
  guessesAllowed = 7;
  wrongGuesses = 0;
  lettersGuessed: string[] = [];
  showHint = false;

  words: Word[] = words.map((word) => {
    return { ...word, letters: word.letters.toLocaleUpperCase() };
  });

  keys = 'ABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÜ'.split('');
  word: Word = this.words[Math.floor(Math.random() * this.words.length)];
  lettersNeeded = this.word.letters
    .split('')
    .filter((letter, index, self) => self.indexOf(letter) === index);
  hint: string =
    this.word.hints[Math.floor(Math.random() * this.word.hints.length)];

  @HostListener('document:keypress', ['$event'])
  onKeyClick(event: KeyboardEvent) {
    const key = event.key.toLocaleUpperCase();
    console.log('Key clicked:', key);

    if (this.isWon() || this.isLost()) {
      console.log('Game is over');
      return;
    }

    if (this.letterIsGuessed(key)) {
      console.log('Letter already guessed');
      return;
    }

    if (!this.lettersNeeded.includes(key)) {
      this.wrongGuesses++;
      console.log('Wrong guess');
    }

    this.lettersGuessed.push(key);
    console.log('lettersGuessed:', this.lettersGuessed);
  }

  location: Location;

  constructor(@Inject(DOCUMENT) private readonly document: Document) {
    this.location = document.location;
  }

  asArray(count: number): unknown[] {
    return new Array(count);
  }

  isWon() {
    return this.lettersNeeded.every((letter) => this.letterIsGuessed(letter));
  }

  isLost() {
    return this.wrongGuesses >= this.guessesAllowed;
  }

  getHint() {
    this.showHint = true;
    this.wrongGuesses++;
    this.wrongGuesses++;
  }

  letterIsGuessed(letter: string) {
    return this.lettersGuessed.includes(letter);
  }

  letterIsNeeded(letter: string) {
    return this.lettersNeeded.includes(letter);
  }
}
