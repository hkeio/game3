enum Category {
  FOOD = 'Essen',
  DRINK = 'Trinken',
  ANIMAL = 'Tier',
}

export type Word = {
  letters: string;
  category: Category;
  hints: string[];
};

export const words: Word[] = [
  {
    letters: 'SAFT',
    category: Category.DRINK,
    hints: ['orange', 'apfel', 'multivitamin'],
  },
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
    letters: 'KAFFEE',
    category: Category.DRINK,
    hints: ['heiß', 'koffein', 'espresso'],
  },
  {
    letters: 'SALAT',
    category: Category.FOOD,
    hints: ['gesund', 'grün', 'gemüse'],
  },
  {
    letters: 'COLA',
    category: Category.DRINK,
    hints: ['kohlensäure', 'süß', 'koffein'],
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
    letters: 'SMOOTHIE',
    category: Category.DRINK,
    hints: ['fruchtig', 'banane', 'mixer'],
  },
  {
    letters: 'SCHNITZEL',
    category: Category.FOOD,
    hints: ['panade', 'fleisch', 'deutsch'],
  },
  {
    letters: 'WEIN',
    category: Category.DRINK,
    hints: ['trauben', 'rot', 'weiß'],
  },
  {
    letters: 'BURGER',
    category: Category.FOOD,
    hints: ['fleisch', 'fast food', 'brötchen'],
  },
  {
    letters: 'MILCH',
    category: Category.DRINK,
    hints: ['weiß', 'kuh', 'kalzium'],
  },
  {
    letters: 'TACOS',
    category: Category.FOOD,
    hints: ['mexikanisch', 'mais', 'gefüllt'],
  },
  {
    letters: 'TEE',
    category: Category.DRINK,
    hints: ['heiß', 'grün', 'schwarz'],
  },
  {
    letters: 'SUSHI',
    category: Category.FOOD,
    hints: ['reis', 'japanisch', 'fisch'],
  },
  {
    letters: 'BIER',
    category: Category.DRINK,
    hints: ['hopfen', 'gerste', 'alkohol'],
  },
  {
    letters: 'OBST',
    category: Category.FOOD,
    hints: ['frucht', 'vitamin', 'gesund'],
  },
  {
    letters: 'LIMONADE',
    category: Category.DRINK,
    hints: ['zitrone', 'süß', 'erfrischung'],
  },
  {
    letters: 'POMMES',
    category: Category.FOOD,
    hints: ['frittieren', 'kartoffeln', 'salz'],
  },
  {
    letters: 'COCKTAIL',
    category: Category.DRINK,
    hints: ['mischgetränk', 'alkohol', 'bunt'],
  },
  {
    letters: 'SUSHI',
    category: Category.FOOD,
    hints: ['reis', 'japanisch', 'fisch'],
  },
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
    hints: ['reiten', 'stall', 'galopp'],
  },
  {
    letters: 'WAL',
    category: Category.ANIMAL,
    hints: ['meer', 'groß', 'säugetier'],
  },
  {
    letters: 'KÄNGURU',
    category: Category.ANIMAL,
    hints: ['australien', 'beutel', 'springen'],
  },
  {
    letters: 'ZEBRA',
    category: Category.ANIMAL,
    hints: ['streifen', 'savanne', 'afrikanisch'],
  },
];
