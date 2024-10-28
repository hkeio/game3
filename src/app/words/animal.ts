import { Category, Word } from './_types';

type Animal = Word & {
  category: Category.ANIMAL;
};

export const animals: Animal[] = [
  {
    letters: 'LÖWE',
    category: Category.ANIMAL,
    hints: ['wild', 'könig der tiere', 'savanne'],
  },
  {
    letters: 'ELEFANT',
    category: Category.ANIMAL,
    hints: ['groß', 'rüssel', 'afrika'],
  },
  {
    letters: 'PANDA',
    category: Category.ANIMAL,
    hints: ['bambus', 'china', 'schwarz-weiß'],
  },
  {
    letters: 'DELFIN',
    category: Category.ANIMAL,
    hints: ['meer', 'intelligent', 'flosse'],
  },
  {
    letters: 'ADLER',
    category: Category.ANIMAL,
    hints: ['vogel', 'greifvogel', 'flügel'],
  },
  {
    letters: 'SCHILDKRÖTE',
    category: Category.ANIMAL,
    hints: ['panzer', 'langsam', 'reptil'],
  },
  {
    letters: 'PFERD',
    category: Category.ANIMAL,
    hints: ['reiten', 'Stall', 'Galopp'],
  },
  {
    letters: 'WAL',
    category: Category.ANIMAL,
    hints: ['Meer', 'groß', 'Säugetier'],
  },
  {
    letters: 'KÄNGURU',
    category: Category.ANIMAL,
    hints: ['Australien', 'Beutel', 'springen'],
  },
  {
    letters: 'ZEBRA',
    category: Category.ANIMAL,
    hints: ['Streifen', 'Savanne', 'afrikanisch'],
  },
];
