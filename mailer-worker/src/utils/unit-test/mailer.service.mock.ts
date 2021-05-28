import { ISendMailOptions } from '@nestjs-modules/mailer';

export class MailerServiceMock {
  async sendMail(sendMailOptions: ISendMailOptions) {
    return {
      messageId: 123
    }
  }
}