import { Module } from '@nestjs/common';
import { WppModule } from './wpp_comunication/wpp.module';

@Module({
  imports: [WppModule],
})
export class AppModule {}
