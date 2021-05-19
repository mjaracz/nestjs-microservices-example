import { Module } from '@nestjs/common';
import { SenderMailController } from './sender-mail.controller';
import { SenderMailService } from './sender-mail.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'NATS_CLIENT',
        transport: Transport.NATS,
        options: {
          url: 'nats://localhost:4222',
        },
      },
    ]),
  ],
  controllers: [SenderMailController],
  providers: [SenderMailService],
})
export class SenderMailModule {}
