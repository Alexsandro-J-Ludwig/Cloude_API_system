import ollama, { Ollama } from 'ollama';

import { AiDTO, AiResponseDTO } from './Ai.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
class AIService {
  client: Ollama;

  constructor() {
    this.client = new Ollama({
      host: 'https://ollama.com',
      headers: {
        Authorization: 'Bearer ' + process.env.OLLAMA_API_KEY,
      },
    });
  }

  async sendQuestion(dto: AiDTO) {
    if (!dto.question?.trim()) {
      return new AiResponseDTO('⚠️ Você enviou uma pergunta vazia!');
    }

    const response = await this.client.chat({
      model: 'glm-5:cloud',
      messages: [
        {
          role: 'user',
          content: dto.question!,
        },
    ],
    format: "json"
    });

    return new AiResponseDTO(response.message.content);
  }
}

export { AIService };
