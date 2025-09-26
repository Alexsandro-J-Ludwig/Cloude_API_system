import { IsString } from 'class-validator';

class AiDTO {
    @IsString()
    public readonly question:string
}

class AiResponseDTO {
    @IsString()
    readonly response:string
    readonly tokens:string

    constructor(data:any) {
        this.response = data.content[0].text;
        this.tokens = data.content
    }
}

export { AiDTO, AiResponseDTO }