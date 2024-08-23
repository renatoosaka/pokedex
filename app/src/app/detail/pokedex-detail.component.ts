import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon/pokemon.service';
import { Pokemon } from '../pokemon/pokemon.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'pokedex-detail',
  templateUrl: './pokedex-detail.component.html',
})
export class PokedexDetailComponent implements OnInit {
  pokemon: Pokemon | null = null;
  isLoading = false;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly pokemonService: PokemonService
  ) {}

  ngOnInit() {
    this.isLoading = true;
    const name = this.route.snapshot.paramMap.get('name');
    this.pokemonService.get(name).subscribe({
      next: (response) => {
        this.pokemon = response;
      },
      error: (error) => {
        this.pokemon = null;
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }
}
