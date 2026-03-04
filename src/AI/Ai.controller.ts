import {
  Body,
  Controller,
  HttpCode,
  HttpException,
  HttpStatus,
  Logger,
  Post,
} from '@nestjs/common';
import { AiDTO } from './Ai.dto';
import { AIService } from './Ai.service';

@Controller('ai')
class AIController {
  constructor(private readonly aiService: AIService) {}

  @Post('/question')
  @HttpCode(201)
  async question(@Body() aiDTO: AiDTO) {
    Logger.log(aiDTO.question);
    return this.aiService.sendQuestion(aiDTO);
  }
}

export { AIController };
