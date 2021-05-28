import { NatsContext } from '@nestjs/microservices';
import { Test, TestingModule } from '@nestjs/testing';
import { MailSenderServiceMock } from '../../utils/unit-test/mail-sender.service.mock';
import { MailSenderController } from '../mail-sender.controller';
import { MailSenderService } from '../mail-sender.service';

describe('MailSender Controller', () => {
  let controller: MailSenderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: MailSenderService,
          useClass: MailSenderServiceMock,
        }
      ],
      controllers: [MailSenderController],
    }).compile();

    controller = module.get<MailSenderController>(MailSenderController);
  });

  it('when call sendMail, should return mail object', () => {
    return controller
      .sendMail({ mail: 'mail@example.com', username: 'username' }, {} as NatsContext)
      .then(resMail => {
        expect(resMail.messageId).toEqual(123);
      })
  });
});
