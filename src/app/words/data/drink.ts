import { Category, Word } from './_types';

type Drink = Word & {
  category: Category.DRINK;
};

export const drinks: Drink[] = [
  {
    letters: 'SAFT',
    category: Category.DRINK,
    hints: ['orange', 'apfel', 'multivitamin'],
  },
  {
    letters: 'KAFFEE',
    category: Category.DRINK,
    hints: ['heiß', 'koffein', 'espresso'],
  },
  {
    letters: 'COLA',
    category: Category.DRINK,
    hints: ['schwarz', 'süß', 'koffein'],
  },
  {
    letters: 'SMOOTHIE',
    category: Category.DRINK,
    hints: ['fruchtig', 'banane', 'mixer'],
  },
  {
    letters: 'WEIN',
    category: Category.DRINK,
    hints: ['trauben', 'rot', 'weiß'],
  },
  {
    letters: 'MILCH',
    category: Category.DRINK,
    hints: ['weiß', 'kuh', 'kalzium'],
  },
  {
    letters: 'TEE',
    category: Category.DRINK,
    hints: ['heiß', 'grün', 'schwarz'],
  },
  {
    letters: 'BIER',
    category: Category.DRINK,
    hints: ['hopfen', 'gerste', 'alkohol'],
  },
  {
    letters: 'LIMONADE',
    category: Category.DRINK,
    hints: ['zitrone', 'süß', 'erfrischung'],
  },
  {
    letters: 'COCKTAIL',
    category: Category.DRINK,
    hints: ['mischgetränk', 'alkohol', 'bunt'],
  },
];
