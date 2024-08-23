import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon/pokemon.service';
import { Pokemon } from '../pokemon/pokemon.interface';

@Component({
  selector: 'pokedex-list',
  templateUrl: './pokedex-list.component.html',
})
export class PokedexListComponent implements OnInit {
  pokemonList: Pokemon[] = [];
  limit = 20;
  offset = 0;
  next: string;

  constructor(private readonly pokemonService: PokemonService) {}

  ngOnInit() {
    this.loadMorePokemons();
  }

  loadMorePokemons() {
    this.pokemonService.list(this.limit, this.offset).subscribe((response) => {
      this.pokemonList = [...this.pokemonList, ...response.data];
      this.offset += this.limit;
      this.next = response.next;
    });
  }
}
