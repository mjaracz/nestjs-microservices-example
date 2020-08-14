import {Injectable, Logger} from '@nestjs/common'
import {MailerService} from '@nestjs-modules/mailer'

@Injectable()
export class MailSenderService {
  constructor(
    private readonly mailerService: MailerService
  ) {
    this.logger = new Logger()
  }
  private logger;
  async sendMail(email: string, username: string) {
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
