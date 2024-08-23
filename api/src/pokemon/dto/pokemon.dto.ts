import { ApiProperty } from "@nestjs/swagger";

export class PokemonDTO {
  @ApiProperty({
    description: "The ID of the Pokemon",
    example: 1,
    type: Number,
  })
  id: number;

  @ApiProperty({
    description: "The name of the Pokemon",
    example: "bulbasaur",
    type: String,
  })
  name: string;

  @ApiProperty({
    description: "The height of the Pokemon",
    example: 7,
    type: Number,
  })
  height: number;

  @ApiProperty({
    description: "The weight of the Pokemon",
    example: 69,
    type: Number,
  })
  weight: number;

  @ApiProperty({
    description: "The image of the Pokemon",
    example:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    type: String,
  })
  image: string;
}
