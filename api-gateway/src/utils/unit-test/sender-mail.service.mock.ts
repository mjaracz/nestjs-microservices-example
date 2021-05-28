import { of } from 'rxjs';

export class SenderMailServiceMock {
  sendToMailerQueue(mail: string, username: string) {
    return of({
      messageId: 123,
      accepted: [mail],
      envelope: { from: username },
    });
  }
}
