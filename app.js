/* jshint esversion: 6 */
var createError = require('http-errors');
var express = require('express');
var Mongoose = require('mongoose');
const bodyParser = require('body-parser');
const chalk = require('chalk');
const debug = require('debug')('app');
const port = process.env.PORT || 2500;

const db = Mongoose.createConnection('mongodb://localhost/COVID_19_DB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


debug(db);
const CSSE = require('./models/daily');
const CSSERouter = require('./routes/CSSERouter'); // (CSSE); 


var path = require('path');

var cookieParser = require('cookie-parser');

var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use('/api', CSSERouter);

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port, () => {
  debug(`listening on port ${chalk.green(port)}`);
});

module.exports = app;
