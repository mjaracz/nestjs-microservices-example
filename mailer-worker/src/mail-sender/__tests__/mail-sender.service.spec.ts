import { MailerService } from '@nestjs-modules/mailer';
import { Test, TestingModule } from '@nestjs/testing';
import { MailerServiceMock } from '../../utils/unit-test/mailer.service.mock';
import { MailSenderService } from '../mail-sender.service';

describe('MailSenderService', () => {
  let service: MailSenderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: MailerService,
          useClass: MailerServiceMock,
        },
        MailSenderService
      ],
    }).compile();

    service = module.get<MailSenderService>(MailSenderService);
  });

  it('when call sendMail, should return mail object', () => {
    return service
      .sendMail('mail@example.com', 'username')
      .then(mailRes => {
        expect(mailRes.messageId).toEqual(123);
      })
  });
});
