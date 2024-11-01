import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-math',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './math.component.html',
  styleUrl: './math.component.scss',
})
export class MathComponent {
  location: Location;
  equation = {
    left: this.randomNumber(1, 10),
    right: this.randomNumber(1, 10),
    operator: this.randomOperator(),
  };
  keys = '1234567890'.split('');

  answer = '';
  allowedKeys = '1234567890-'.split('');
  isWrong = false;

  constructor(@Inject(DOCUMENT) private readonly document: Document) {
    this.location = document.location;
  }

  @HostListener('document:keydown', ['$event'])
  onKeyClick({ key }: KeyboardEvent) {
    console.log(key);

    if (key === 'Enter') {
      this.onAnswer();
      return;
    }

    if (key === 'Backspace') {
      this.answer = this.answer.slice(0, -1);
      return;
    }

    if (!this.allowedKeys.includes(key)) {
      return;
    }

    this.answer += key;
  }

  get result(): number {
    switch (this.equation.operator) {
      case '+':
        return this.equation.left + this.equation.right;
      case '-':
        return this.equation.left - this.equation.right;
      default:
        return NaN;
    }
  }

  onAnswer() {
    this.isWrong = false;
    const answer = parseInt(this.answer);
    console.log('Answer:', answer, this.result);

    if (answer === this.result) {
      this.equation = {
        left: this.randomNumber(1, 10),
        right: this.randomNumber(1, 10),
        operator: this.randomOperator(),
      };
      this.answer = '';
    } else {
      this.isWrong = true;
    }
  }

  clear() {
    this.answer = '';
  }

  private randomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private randomOperator(): string {
    const operators = ['+', '-'];
    return operators[Math.floor(Math.random() * operators.length)];
  }
}
