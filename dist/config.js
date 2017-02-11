"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var pool = false;
var direct = false;
var host = process.env.email_host;
var port = 587;
var auth = {
  user: process.env.email_username, // SMTP username
  pass: process.env.email_password // SMTP password
};

var email_config = exports.email_config = {
  pool: pool, direct: direct, host: host, port: port, auth: auth
};