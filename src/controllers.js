import nodemailer from 'nodemailer';
import {email_config} from './config';
import nunjucks from 'nunjucks';

console.log(email_config);

const transport = nodemailer.createTransport(email_config);

export const send_welcome_email = (req, res, done) => {
  const htmlBody = nunjucks.render('welcome.html');
  const {recipient_email} = req.body;
  transport.sendMail({
    from: 'roscr admin <admin@roscr.com>',
    to: recipient_email,
    subject: 'test',
    text: 'hello hello',
    html: htmlBody
  }, error => {
    if (error) {
      return done(error);
    } else {
      return res.json({msg: 'Email sent!'});
    }
  });
};
