import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "041d2de2a11aa2",
    pass: "4f3b7814ab37c7"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body}: SendMailData) {
    
  await transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
    to: 'Jeremias Marinho <jeremias10@msn.com>',
    subject,
    html: body,
  })
  };
}