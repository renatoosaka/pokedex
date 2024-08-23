import { ApiProperty } from "@nestjs/swagger";
import { PokemonDTO } from "../pokemon.dto";

export class ResponseListPokemonDTO {
  @ApiProperty({
    description: "The total number of Pokemon",
    example: 1118,
    type: Number,
  })
  total: number;

  @ApiProperty({
    description: "Whether there are more Pokemon",
    example: "http://localhost:3000/pokemon?limit=20&offset=20",
    type: String,
  })
  next: string;

  @ApiProperty({
    description: "The list of Pokemon",
    example: [
      {
        id: 1,
        name: "bulbasaur",
        height: 7,
        weight: 69,
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
    ],
    type: [PokemonDTO],
  })
  data: PokemonDTO[];
}
