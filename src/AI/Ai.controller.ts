import {
    Body,
    Controller,
    HttpCode,
    HttpException,
    HttpStatus,
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
      try {
        const response = await this.aiService.sendQuestion(aiDTO);
        return response;
      } catch (err: any) {
        throw new HttpException(
          {
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            error: 'Error in talk with AI',
          },
          HttpStatus.INTERNAL_SERVER_ERROR,
          { cause: err },
        );
      }
    }
  }
  
  export { AIController };
  