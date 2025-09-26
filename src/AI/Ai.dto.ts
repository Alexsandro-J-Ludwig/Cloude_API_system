import { IsString } from 'class-validator';

class AiDTO {
    @IsString()
    public readonly question:string
}

class AiResponseDTO {
    @IsString()
    readonly response:string

    constructor(data:any) {
        this.response = data.content[0].text;
    }
}

export { AiDTO, AiResponseDTO }