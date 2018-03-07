'use strict';

const express = require('express');
const logger = require('./utils/logger');
const bodyParser = require('body-parser');
var assets = require("./assets");
const app = express();
var sassMiddleware = require("node-sass-middleware");

app.use("/assets", assets);

app.use(sassMiddleware({
  src: __dirname + '/public',
  dest: '/tmp'
}));


const exphbs = require('express-handlebars');
app.use(bodyParser.urlencoded({ extended: false, }));
app.use(express.static('public'));
app.use(express.static('/tmp'));

app.engine('.hbs', exphbs({
  extname: '.hbs',
  defaultLayout: 'main',
  // helpers: {
  //   CalculateDuration: function (songs) {
  //      let total=0;
  //      for (let i in songs) {
  //         total+=songs[i].duration;
  //      }
  //      return total + ' mins';
  //   }
  // }
}));
app.set('view engine', '.hbs');

const routes = require('./routes');
app.use('/', routes);

const listener = app.listen(process.env.PORT || 4000, function () {
  logger.info(`gomix-template-1 started on port ${listener.address().port}`);
});
