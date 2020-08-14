import {Controller} from '@nestjs/common'
import {Ctx, MessagePattern, NatsContext, Payload} from '@nestjs/microservices'
import {MailerQueueData} from './interfaces/mail-sender.interface'
import {MailSenderService} from './mail-sender.service'

@Controller('mail-sender')
export class MailSenderController {
  constructor(
    private mailSenderService: MailSenderService
  ) {}

  @MessagePattern('mailer')
  async sendMail(@Payload() data: MailerQueueData, @Ctx() context: NatsContext) {
    const {mail, username} = data;
    return this.mailSenderService.sendMail(mail, username)
  }
}
