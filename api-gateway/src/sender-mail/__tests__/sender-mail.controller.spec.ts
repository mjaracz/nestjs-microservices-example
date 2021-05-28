import { Test, TestingModule } from '@nestjs/testing';
import { SenderMailServiceMock } from '../../utils/unit-test/sender-mail.service.mock';
import { SenderMailController } from '../sender-mail.controller';
import { SenderMailService } from '../sender-mail.service';

describe('SenderMailController', () => {
  let senderMailController: SenderMailController;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: SenderMailService,
          useClass: SenderMailServiceMock,
        },
      ],
      controllers: [SenderMailController],
    }).compile();

    senderMailController = module.get(SenderMailController);
  });

  it('when call sendMail, should return mail object', () => {
    return senderMailController
      .sendMail({ username: '', mail: '' })
      .toPromise()
      .then(mailRes => {
        expect(mailRes.messageId).toEqual(123);
      });
  });
});
