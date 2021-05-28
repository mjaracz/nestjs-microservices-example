import { Body, Controller, Post } from '@nestjs/common';
import { SenderMailService } from './sender-mail.service';
import { CreateMailDto } from './dto/create-mail.dto';
import { Observable } from 'rxjs';
import { Mail } from './interface/mail.interface';

@Controller('send-mail')
export class SenderMailController {
  constructor(private readonly senderMailService: SenderMailService) {}

  @Post()
  sendMail(@Body() body: CreateMailDto): Observable<Mail> {
    const { mail, username } = body;
    return this.senderMailService.sendToMailerQueue(mail, username);
  }
}
