import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LocalStorage } from "node-localstorage";

async function bootstrap() {
  global.localStorage = new LocalStorage('./dsw-storage');
  localStorage.setItem('professor', '[{"nome":"Lucas Damasceno Silva","_id":1},{"nome":"João Lucas Campos","_id":2},{"nome":"Renato Souza Pinto","_id":3}]');
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(process.env.PORT || 8080);
}
bootstrap();
