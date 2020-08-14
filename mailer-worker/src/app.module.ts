import {Logger, Module} from '@nestjs/common'
import {MailSenderModule} from './mail-sender/mail-sender.module';

@Module({
  imports: [
    MailSenderModule,
    Logger
  ]
})
export class AppModule {
}
