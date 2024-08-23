import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { routes } from './pokedex-app.routes';
import { PokedexAppComponent } from './pokedex-app.component';
import { PokemonService } from './pokemon/pokemon.service';
import { PokedexListComponent } from './list/pokedex-list.component';
import { PokedexDetailComponent } from './detail/pokedex-detail.component';

@NgModule({
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes)],
  providers: [PokemonService],
  declarations: [
    PokedexAppComponent,
    PokedexListComponent,
    PokedexDetailComponent,
  ],
  bootstrap: [PokedexAppComponent],
})
export class PokedexAppModule {}
