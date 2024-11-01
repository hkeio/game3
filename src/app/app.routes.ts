import { Routes } from '@angular/router';
import { MathComponent } from './math/math.component';
import { WordsComponent } from './words/words.component';

export const routes: Routes = [
  { path: 'math', component: MathComponent },
  { path: 'words', component: WordsComponent },
  { path: '', redirectTo: '/words', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];
