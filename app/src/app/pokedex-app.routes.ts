import { Routes } from '@angular/router';
import { PokedexListComponent } from './list/pokedex-list.component';
import { PokedexDetailComponent } from './detail/pokedex-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: PokedexListComponent,
  },
  {
    path: 'pokemon/:name',
    component: PokedexDetailComponent,
  },
];
