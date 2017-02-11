'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _nunjucks = require('nunjucks');

var _nunjucks2 = _interopRequireDefault(_nunjucks);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _path = require('path');

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.set('view engine', 'nunjucks');

// Setup nunjucks templating engine
_nunjucks2.default.configure((0, _path.join)(__dirname, 'templates'), {
  autoescape: true,
  express: app
});

app.use((0, _morgan2.default)('combined'));

app.use((0, _bodyParser.json)());

(0, _routes2.default)(app);

app.listen(process.env.port || 5050);