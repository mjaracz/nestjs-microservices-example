import { of } from 'rxjs';
import { ClientProxy } from '@nestjs/microservices';
import { generateClientProxyMock } from '../../utils/unit-test/client-proxy.mock';
import { SenderMailService } from '../sender-mail.service';

describe('SenderMailService', () => {
  let senderMailService: SenderMailService;
  let simulationNatsClient: jest.Mocked<ClientProxy>;

  beforeEach(() => {
    simulationNatsClient = generateClientProxyMock<ClientProxy>('send');
    senderMailService = new SenderMailService(simulationNatsClient);
  });
  it('when sendToMailerQueue is call, should send data to queue', () => {
    simulationNatsClient.send.mockImplementationOnce(() =>
      of({ messageId: 123 }),
    );
    senderMailService.sendToMailerQueue('example@mail.com', 'username');
    expect(simulationNatsClient.send).toBeCalledWith('mailer', {
      mail: 'example@mail.com',
      username: 'username',
    });
  });
});
