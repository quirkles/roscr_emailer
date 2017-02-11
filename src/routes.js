import {send_welcome_email} from './controllers';

export default app => {
  app.post('/send/welcome', send_welcome_email);
};
