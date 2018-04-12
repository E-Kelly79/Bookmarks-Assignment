'use strict';

const express = require('express');
const logger = require('./utils/logger');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const app = express();

var assets = require("./assets");
var sassMiddleware = require("node-sass-middleware");

app.use("/assets", assets);

app.use(sassMiddleware({
  src: __dirname + '/public',
  dest: '/tmp'
}));

app.use(fileUpload());


const exphbs = require('express-handlebars');
app.use(bodyParser.urlencoded({ extended: false, }));
app.use(express.static('public'));
app.use(express.static('/tmp'));
app.use(cookieParser());

app.engine('.hbs', exphbs({
  extname: '.hbs',
  defaultLayout: 'main',
}));
app.set('view engine', '.hbs');

const routes = require('./routes');
app.use('/', routes);

const listener = app.listen(process.env.PORT || 4000, function () {
  logger.info(`gomix-template-1 started on port ${listener.address().port}`);
});
