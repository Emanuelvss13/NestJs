import { HttpFilter } from './http.filter';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpFilter());
  await app.listen(3000);
}
bootstrap();
