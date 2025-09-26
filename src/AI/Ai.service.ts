import Anthropic from "@anthropic-ai/sdk";
import { AiDTO, AiResponseDTO } from "./Ai.dto";
import { Injectable } from "@nestjs/common";

@Injectable()
class AIService {
    anthropic:Anthropic

    constructor(){
        const apiKey = process.env.KEY;
        if (!apiKey) {
            throw new Error("ANTHROPIC API KEY not found. Make sure KEY is set in your .env file.");
        }
        this.anthropic = new Anthropic({
            apiKey: apiKey
        });
    }

    async sendQuestion(dto: AiDTO){
        const data = await this.anthropic.messages.countTokens({
            model: "claude-sonnet-4-20250514",
            messages: [{ role: "user", content: dto.question}]
        })

        return new AiResponseDTO(data);
    }
}

export { AIService }