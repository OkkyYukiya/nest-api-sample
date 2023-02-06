import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { Request } from 'express';
import cookieParser, * as CookieParser from 'cookie-parser';
import * as csurf from 'csurf';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.enableCors({
    credentials: true,
    origin: ['http://localhost:3000'],
  });
  // jwtをcookieベースで通信する、frontendから受け取ったcookieを解析するための設定
  app.use(cookieParser());
  await app.listen(3005);
}
bootstrap();
