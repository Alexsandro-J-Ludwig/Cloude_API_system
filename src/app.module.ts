import { Module } from '@nestjs/common';
import { AiModule } from './AI/Ai.module';

@Module({
  imports: [AiModule],
})
export class AppModule {}
