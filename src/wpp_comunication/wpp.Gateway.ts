import WppProvider from './wpp.service';
import { MessageService } from './messageService';
import { Controller, HttpCode, Injectable } from '@nestjs/common';

@Controller()
export class WppGateway {
  constructor(
    private readonly wppProvider: WppProvider,
    private readonly messageService: MessageService,
  ) {
    this.wppProvider.client.on("message", async (msg) => {
      if(!msg.fromMe) {
        const element = await this.messageService.sendQuestion(msg.from, msg.body);
        this.wppProvider.sendMessages(msg.from, element)
      }
    })
  }
}