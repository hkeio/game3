import { JsonPipe } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Word, words } from './words';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  guessesAllowed = 6;
  wrongGuesses = 0;
  lettersGuessed: string[] = [];

  words: Word[] = words.map((word) => {
    return { ...word, letters: word.letters.toLocaleUpperCase() };
  });

  keys = 'ABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÜ'.split('');
  word: Word = this.words[Math.floor(Math.random() * this.words.length)];
  lettersNeeded = this.word.letters
    .split('')
    .filter((letter, index, self) => self.indexOf(letter) === index);

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

  isWon() {
    return this.lettersNeeded.every((letter) => this.letterIsGuessed(letter));
  }

  isLost() {
    return this.wrongGuesses >= this.guessesAllowed;
  }

  letterIsGuessed(letter: string) {
    return this.lettersGuessed.includes(letter);
  }

  letterIsNeeded(letter: string) {
    return this.lettersNeeded.includes(letter);
  }
}
