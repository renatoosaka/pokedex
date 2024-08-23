import * as request from "supertest";
import { Test } from "@nestjs/testing";
import { INestApplication } from "@nestjs/common";
import { PokemonService } from "../src/pokemon/pokemon.service";
import { PokedexApiModule } from "../src/pokedex-api.module";
import { server } from "./utils";
import { http, HttpResponse } from "msw";

describe("Pokemon", () => {
  let app: INestApplication;
  let service: PokemonService;

  beforeAll(async () => {
    server.listen({ onUnhandledRequest: "bypass" });

    const moduleRef = await Test.createTestingModule({
      imports: [PokedexApiModule],
    }).compile();

    app = moduleRef.createNestApplication();
    service = moduleRef.get<PokemonService>(PokemonService);

    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it("should return a list of Pokemon", async () => {
    await request(app.getHttpServer())
      .get("/pokemon")
      .expect(200)
      .then(({ body }) => {
        expect(body.data).toHaveLength(2);
      });
  });

  it("should return a Pokemon by name", async () => {
    await request(app.getHttpServer())
      .get("/pokemon/bulbasaur")
      .expect(200)
      .then(({ body }) => {
        expect(body.name).toBe("bulbasaur");
      });
  });

  it("should return a 404 error when Pokemon not found", async () => {
    server.resetHandlers();
    server.use(
      http.get("https://pokeapi.co/api/v2/pokemon/bulbasaur", () => {
        return HttpResponse.json({ detail: "Not found." }, { status: 404 });
      })
    );
    await request(app.getHttpServer()).get("/pokemon/invalid").expect(404);
  });

  it("should return a 500 error when an internal server error occurs", async () => {
    server.resetHandlers();
    server.use(
      http.get("https://pokeapi.co/api/v2/pokemon/bulbasaur", () => {
        return HttpResponse.json(
          { detail: "Internal Server Error." },
          { status: 500 }
        );
      }),
      http.get("https://pokeapi.co/api/v2/pokemon", () => {
        return HttpResponse.json(
          { detail: "Internal Server Error." },
          { status: 500 }
        );
      })
    );

    await request(app.getHttpServer()).get("/pokemon/bulbasaur").expect(500);

    await request(app.getHttpServer()).get("/pokemon").expect(500);
  });
});
