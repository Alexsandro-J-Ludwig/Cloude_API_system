import { Module } from "@nestjs/common";
import { AIController } from "./Ai.controller";
import { AIService } from "./Ai.service";

@Module({
    controllers: [AIController],
    providers: [AIService],
    exports: [AIService],
})

export class AiModule {}