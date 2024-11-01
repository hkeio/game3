import { Word } from './_types';
import { animals } from './animal';
import { drinks } from './drink';
import { foods } from './food';

export * from './_types';
export const words: Word[] = [...animals, ...drinks, ...foods];
