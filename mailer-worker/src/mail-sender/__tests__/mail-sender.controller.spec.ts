import { Test, TestingModule } from '@nestjs/testing';
import { MailSenderController } from '../mail-sender.controller';

describe('MailSender Controller', () => {
  let controller: MailSenderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MailSenderController],
    }).compile();

    controller = module.get<MailSenderController>(MailSenderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
