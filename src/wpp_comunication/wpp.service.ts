import { Injectable, OnModuleInit } from '@nestjs/common';
import { Client, LocalAuth } from 'whatsapp-web.js';

@Injectable()
class WppProvider implements OnModuleInit {
  client: Client;

  constructor() {
    this.client = new Client({
      authStrategy: new LocalAuth({ clientId: 'bot-1' }),
      authTimeoutMs: 60000,
      takeoverOnConflict: true,
      takeoverTimeoutMs: 5000,
      puppeteer: {
        executablePath:
          'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
        headless: true,
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox',
          '--disable-extensions',
          '--disable-dev-shm-usage',
          '--disable-accelerated-2d-canvas',
          '--no-first-run',
          '--no-zygote',
          '--remote-debugging-port=9222',
        ],
      },
      userAgent:
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    });
  }

  onModuleInit() {
    this.initializeLogs();
  }

  private initializeLogs() {
    console.log('[WppProvider] Inicializando cliente WhatsApp...');

    this.client.on('qr', (qr) => {
      console.log('[WppProvider] QR Code recebido:', qr);
    });

    this.client.on('ready', () => {
      console.log('[WppProvider] WhatsApp Conectado');
    });

    this.client.on('authenticated', () => {
      console.log('[WppProvider] Autenticado com sucesso!');
    });

    this.client.on('auth_failure', () => {
      console.log('[WppProvider] Falha na autenticação!');
    });

    this.client.on('disconnected', (reason) => {
      console.log('[WppProvider] WhatsApp desconectado:', reason);
    });

    this.client.on('message_create', (msg) => {
      console.log('[WppProvider] Mensagem recebida:', msg.body);
    });

    this.client.initialize().catch((error) => {
      console.error('[WppProvider] Erro ao inicializar o cliente:', error);
    });
  }

  onMessage(callback: (from: string, body: string) => void) {
    this.client.on('message', (msg) => {
      callback(msg.from, msg.body);
    });
  }

  async sendMessages(number: string, message: string) {
    try {
      const chatId = number.includes('@') ? number : `${number}@c.us`;

      await this.client.sendMessage(chatId, message);
      console.log(`[WppProvider] Mensagem enviada para ${chatId}`);
    } catch (e: any) {
      console.error('[WppProvider] Falha ao enviar mensagem:', e);
    }
  }
}

export default WppProvider;
