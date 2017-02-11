const pool = false;
const direct = false;
const host = process.env.email_host;
const port = 587;
const auth = {
  user: process.env.email_username,  // SMTP username
  pass: process.env.email_password // SMTP password
};

export const email_config = {
  pool, direct, host, port, auth
};
