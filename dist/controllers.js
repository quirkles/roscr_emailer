'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.send_welcome_email = undefined;

var _nodemailer = require('nodemailer');

var _nodemailer2 = _interopRequireDefault(_nodemailer);

var _config = require('./config');

var _nunjucks = require('nunjucks');

var _nunjucks2 = _interopRequireDefault(_nunjucks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_config.email_config);

var send_welcome_email = exports.send_welcome_email = function send_welcome_email(recipient_email) {
  var htmlBody = _nunjucks2.default.render('welcome.html');
  tspt.sendMail({
    from: 'roscr admin <admin@roscr.com>',
    to: recipient_email,
    subject: 'test',
    text: 'hello hello',
    html: htmlBody
  }, function (error) {
    if (error) {
      console.log(error);
    }
  });
};