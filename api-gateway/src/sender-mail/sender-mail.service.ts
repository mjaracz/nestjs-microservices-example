import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Mail } from './interface/mail.interface';

@Injectable()
export class SenderMailService {
  constructor(
    @Inject('NATS_CLIENT') private readonly natsClient: ClientProxy,
  ) {}

  sendToMailerQueue(mail: string, username: string): Observable<Mail> {
    const startTime = Date.now();
    return this.natsClient.send('mailer', { mail, username }).pipe(
      map(message => ({
        duration: Date.now() - startTime,
        ...message,
      })),
    );
  }
}
