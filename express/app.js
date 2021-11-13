var express = require('express');
var path = require('path');
var logger = require('morgan');

require('dotenv').config()
require('./models/setupMongo')();

var todoRouter = require('./routes/todo');
var authRouter = require('./routes/auth');
//var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/auth', authRouter);
app.use('/todo', todoRouter);
//app.use('./users', usersRouter);

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

module.exports = app;
