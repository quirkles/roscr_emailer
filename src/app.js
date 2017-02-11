import express from 'express';
import nunjucks from 'nunjucks';
import morgan from 'morgan';
import {json as json_parser} from 'body-parser';
import {join as join_path} from 'path';


import routes from './routes';

const app = express();

app.set('view engine', 'nunjucks');

// Setup nunjucks templating engine
nunjucks.configure(join_path(__dirname, '../', 'templates'), {
  autoescape: true,
  express: app
});

app.use(morgan('combined'));

app.use(json_parser());

routes(app);

app.listen(process.env.port || 5050);
