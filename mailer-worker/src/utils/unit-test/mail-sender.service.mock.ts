export class MailSenderServiceMock {
  async sendMail() {
    return { messageId: 123 };
  }
}