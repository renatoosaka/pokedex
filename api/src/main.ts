import { NestFactory } from "@nestjs/core";
import { PokedexApiModule } from "./pokedex-api.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(PokedexApiModule);

  app.enableCors();
  app.setGlobalPrefix("api");

  const config = new DocumentBuilder()
    .setTitle("Pokedex API")
    .setDescription("API for a Pokedex")
    .setVersion("1.0")
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("swagger", app, document);

  await app.listen(3000);
}

bootstrap();
