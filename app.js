const createError = require('http-errors');
const express = require('express');
const path = require('path');
// const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

// Config
require('dotenv').config({
  path: './config/keys.env'
})

// Middleware
// app.use(cors());

// Import Error middleware
const {error} = require('./middleware/error');

// Import DB
const { connectDB } = require('./db/dbConnection');

// Connecting DB
connectDB();

const app = express();

// Import Routes
const indexRoute = require('./routes');
const seatsRoute = require('./routes/seats');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());


// Handling Routes
app.use('/', indexRoute);
app.use('/seats', seatsRoute);
app.use(error);




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
