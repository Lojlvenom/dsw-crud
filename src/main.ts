import { DswStorage } from './shared/storage';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LocalStorage } from "node-localstorage";

async function bootstrap() {
  global.localStorage = new LocalStorage('./dsw-storage');
  DswStorage.populateStorage();
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(process.env.PORT || 8080);
}
bootstrap();
