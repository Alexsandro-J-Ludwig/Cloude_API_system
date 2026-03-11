import { Module } from "@nestjs/common";
import { WppGateway } from "./wpp.Gateway";
import WppProvider from "./wpp.service";
import { MessageService } from "./messageService";

@Module({
  controllers: [WppGateway],       // Controllers ficam aqui
  providers: [WppProvider, MessageService],
  exports: [WppProvider, MessageService], // Exporta apenas providers
})
export class WppModule {}