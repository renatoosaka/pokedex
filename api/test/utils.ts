import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { BULBASAUR_PAYLOAD, POKEMON_LIST } from "./payload";

export const server = setupServer(
  http.get("https://pokeapi.co/api/v2/pokemon", () => {
    return HttpResponse.json(POKEMON_LIST);
  }),
  http.get("https://pokeapi.co/api/v2/pokemon/bulbasaur", () => {
    return HttpResponse.json(BULBASAUR_PAYLOAD);
  })
);
