'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _controllers = require('./controllers');

exports.default = function (app) {
  app.post('/send/welcome', function (req, res) {
    var recipient_email = req.body.recipient_email;

    (0, _controllers.send_welcome_email)(recipient_email);
  });
};