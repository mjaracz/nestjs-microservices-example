import { Injectable, Logger } from '@nestjs/common'
import { MailerService } from '@nestjs-modules/mailer'

@Injectable()
export class MailSenderService {
  private logger;

  constructor(
    private readonly mailerService: MailerService
  ) {
    this.logger = new Logger()
  }

  async sendMail(email: string, username: string) {
    console.log(email, username);
    return this.mailerService.sendMail({
      to: email,
      from: 'michaljaracz2@gmail.com',
      subject: 'Remember Password, no-replay ✔',
      template: 'index',
      context: {
        code: 'cf1a3f828287',
        username: username
      }
    })
      .then((res) => {
        this.logger.verbose('mail was send')
        return res
      })
      .catch((err) => {
        this.logger.warn(err)
      })
  }

}
