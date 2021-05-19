import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs/operators';

@Injectable()
export class SenderMailService {
  constructor(
    @Inject('NATS_CLIENT') private readonly natsClient: ClientProxy,
  ) {}

  async sendToMailerQueue(mail: string, username: string) {
    const startTime = Date.now();
    return this.natsClient.send('mailer', { mail, username }).pipe(
      map(message => ({
        duration: Date.now() - startTime,
        ...message,
      })),
    );
  }
}
