import ollama, { Ollama } from 'ollama';

import { Injectable } from '@nestjs/common';

@Injectable()
class MessageService {
  client: Ollama;

  constructor() {
    this.client = new Ollama({
      host: 'https://ollama.com',
      headers: {
        Authorization: 'Bearer ' + process.env.OLLAMA_API_KEY,
      },
    });
  }

  async sendQuestion(from: string, prompt: string) {
    if (!prompt) {
      throw new Error('⚠️ Você enviou uma pergunta vazia!');
    }

    const response = await this.client.chat({
      model: 'glm-5:cloud',
      messages: [
        {
          role: "user",
          content: prompt!,
        },
    ],
    });

    return response.message.content;
  }
}

export { MessageService };
