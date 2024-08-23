import { HttpService } from "@nestjs/axios";
import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from "@nestjs/common";
import { ResponseListPokemonDTO } from "./dto/response/list.dto";
import { PokemonDTO } from "./dto/pokemon.dto";

@Injectable()
export class PokemonService {
  constructor(private readonly httpService: HttpService) {}

  async list(
    limit: number = 20,
    offset: number = 0,
    host: string
  ): Promise<ResponseListPokemonDTO> {
    try {
      const _offset = Number(offset) + Number(limit);
      const { data } = await this.httpService.axiosRef.get(`/pokemon`, {
        params: {
          limit,
          offset: _offset,
        },
      });

      const list = await Promise.all(
        data.results.map((pokemon) => this.get(pokemon.name))
      );

      const response = {
        total: data.count,
        next: data.next
          ? `${host}/pokemon?limit=${limit}&offset=${_offset}`
          : null,
        data: list,
      };

      return response;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async get(name: string): Promise<PokemonDTO> {
    try {
      const { data } = await this.httpService.axiosRef.get(`/pokemon/${name}`);

      return {
        id: data.id,
        name: data.name,
        height: data.height,
        weight: data.weight,
        image: data.sprites.other["official-artwork"].front_default,
      };
    } catch (error: any) {
      if (error?.response && error.response.status === 404) {
        throw new NotFoundException();
      }

      throw new InternalServerErrorException();
    }
  }
}
