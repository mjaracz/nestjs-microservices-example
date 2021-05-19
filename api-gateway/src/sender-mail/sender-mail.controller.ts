import { Body, Controller, Post } from '@nestjs/common';
import { SenderMailService } from './sender-mail.service';
import { CreateMailDto } from './dto/create-mail.dto';

@Controller('send-mail')
export class SenderMailController {
  constructor(private readonly senderMailService: SenderMailService) {}

  @Post()
  sendToMailerQueue(@Body() body: CreateMailDto) {
    const { mail, username } = body;
    return this.senderMailService.sendToMailerQueue(mail, username);
  }
}
