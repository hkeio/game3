import { Category, Word } from './_types';

type Food = Word & {
  category: Category.FOOD;
};

export const foods: Food[] = [
  {
    letters: 'brot',
    category: Category.FOOD,
    hints: ['vollkorn', 'weiß'],
  },
  {
    letters: 'Kuchen',
    category: Category.FOOD,
    hints: ['Schokolade', 'Erdbeere'],
  },
  {
    letters: 'nudeln',
    category: Category.FOOD,
    hints: ['spaghetti', 'penne'],
  },

  {
    letters: 'PASTA',
    category: Category.FOOD,
    hints: ['italienisch', 'nudeln', 'spaghetti'],
  },
  {
    letters: 'SALAT',
    category: Category.FOOD,
    hints: ['gesund', 'grün', 'gemüse'],
  },
  {
    letters: 'PIZZA',
    category: Category.FOOD,
    hints: ['ofen', 'käse', 'italienisch'],
  },
  {
    letters: 'SUPPE',
    category: Category.FOOD,
    hints: ['löffel', 'warm', 'tomate'],
  },
  {
    letters: 'SCHNITZEL',
    category: Category.FOOD,
    hints: ['panade', 'fleisch', 'deutsch'],
  },
  {
    letters: 'BURGER',
    category: Category.FOOD,
    hints: ['fleisch', 'fast food', 'brötchen'],
  },
  {
    letters: 'TACOS',
    category: Category.FOOD,
    hints: ['mexikanisch', 'mais', 'gefüllt'],
  },
  {
    letters: 'SUSHI',
    category: Category.FOOD,
    hints: ['reis', 'japanisch', 'fisch'],
  },
  {
    letters: 'OBST',
    category: Category.FOOD,
    hints: ['frucht', 'vitamin', 'gesund'],
  },
  {
    letters: 'POMMES',
    category: Category.FOOD,
    hints: ['frittieren', 'kartoffeln', 'salz'],
  },
  {
    letters: 'SUSHI',
    category: Category.FOOD,
    hints: ['reis', 'japanisch', 'fisch'],
  },
];
