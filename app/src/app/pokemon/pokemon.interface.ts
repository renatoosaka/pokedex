// Definindo uma interface para o response
export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  image: string;
}

// Definindo uma interface para uma lista de Pokémon
export interface PokemonListResponse {
  data: Pokemon[];
  next: string;
  total: number;
}
