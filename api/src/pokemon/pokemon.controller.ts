import { Controller, Get, Param, Query, Req } from "@nestjs/common";
import { ApiOkResponse, ApiQuery, ApiTags } from "@nestjs/swagger";
import { Request } from "express";
import { ResponseListPokemonDTO } from "./dto/response/list.dto";
import { PokemonService } from "./pokemon.service";

@ApiTags("pokemon")
@Controller("pokemon")
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get()
  @ApiQuery({
    name: "limit",
    required: false,
    schema: { type: "integer", default: 20 },
  })
  @ApiQuery({
    name: "offset",
    required: false,
    schema: { type: "integer", default: 0 },
  })
  @ApiOkResponse({
    description: "List of Pokemon",
    type: ResponseListPokemonDTO,
  })
  async list(
    @Query("limit") limit: number = 20,
    @Query("offset") offset: number = 0,
    @Req() req: Request
  ) {
    const hostUrl = `${req.protocol}://${req.get("host")}`;
    return this.pokemonService.list(limit, offset, hostUrl);
  }

  @Get(":name")
  @ApiOkResponse({
    description: "Pokemon",
    type: ResponseListPokemonDTO,
  })
  async get(@Param("name") name: string) {
    return this.pokemonService.get(name);
  }
}
