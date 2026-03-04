import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';
import { Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const port = process.env.PORT || 3000;

  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('EndPoints')
    .setDescription(
      'EndPoints para acesso de rotas da API do sistema de comunicação com o Ollama',
    )
    .setVersion('1.5')
    .addTag('AI')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(port);

  Logger.log(
    `Servidor rodando na porta: ${port}\nSwagger: http://localhost:${port}/api`,
  );
}
bootstrap();