const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('./database');

const passengersRouter = require('./routes/passenger.routes');
const driversRouter = require('./routes/driver.routes');
const routesRouter = require('./routes/route.routes');
const busesRouter = require('./routes/bus.routes');
const travelRouter = require('./routes/travel.routes');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/passenger', passengersRouter);
app.use('/api/driver', driversRouter);
app.use('/api/bus', busesRouter);
app.use('/api/route', routesRouter);
app.use('/api/travel', travelRouter);

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

module.exports = app;
