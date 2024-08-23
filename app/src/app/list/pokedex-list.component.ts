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
  searchQuery: string = '';
  isLoading = false;

  constructor(private readonly pokemonService: PokemonService) {}

  ngOnInit() {
    this.loadMorePokemons();
  }

  loadMorePokemons() {
    this.pokemonService.list(this.limit, this.offset).subscribe({
      next: (response) => {
        this.pokemonList = [...this.pokemonList, ...response.data];
        this.offset += this.limit;
        this.next = response.next;
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }

  clearSearch(): void {
    this.pokemonList = [];
    this.searchQuery = '';
    this.limit = 20;
    this.offset = 0;
    this.loadMorePokemons();
  }

  onSubmit(): void {
    if (this.searchQuery) {
      this.pokemonService.get(this.searchQuery.toLowerCase()).subscribe(
        (data) => {
          this.pokemonList = [data];
          this.next = null;
        },
        (error) => {
          this.pokemonList = [];
          this.next = null;
        }
      );
    }
  }
}
