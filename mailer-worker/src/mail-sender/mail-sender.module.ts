import {Module} from '@nestjs/common'
import {HandlebarsAdapter, MailerModule} from '@nestjs-modules/mailer'
import {MailSenderController} from './mail-sender.controller'
import {MailSenderService} from './mail-sender.service'

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: false,
        auth: {
          user: process.env.EMAIL_ID,
          pass: process.env.EMAIL_PASS,
        },
      },
      defaults: {
        from: '"nest-modules" <modules@nestjs.com>',
      },
      template: {
        dir: process.cwd() + '/templates/',
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        }
      }
    })
  ],
  controllers: [MailSenderController],
  providers: [MailSenderService]
})
export class MailSenderModule {}
