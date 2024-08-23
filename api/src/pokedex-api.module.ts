import { Module } from "@nestjs/common";
import { PokemonController } from "./pokemon/pokemon.controller";
import { PokemonService } from "./pokemon/pokemon.service";
import { HttpModule } from "@nestjs/axios";

@Module({
  imports: [HttpModule.register({ baseURL: "https://pokeapi.co/api/v2" })],
  controllers: [PokemonController],
  providers: [PokemonService],
})
export class PokedexApiModule {}
