export enum Category {
  FOOD = 'Essen',
  DRINK = 'Trinken',
  ANIMAL = 'Tier',
}

export type Word = {
  letters: string;
  category: Category;
  hints: string[];
};
