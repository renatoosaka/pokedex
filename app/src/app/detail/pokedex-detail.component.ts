import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon/pokemon.service';
import { Pokemon } from '../pokemon/pokemon.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'pokedex-detail',
  templateUrl: './pokedex-detail.component.html',
})
export class PokedexDetailComponent implements OnInit {
  pokemon: Pokemon;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly pokemonService: PokemonService
  ) {}

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');
    this.pokemonService.get(name).subscribe((response) => {
      this.pokemon = response;
    });
  }
}
