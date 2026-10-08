var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
const sequelize = require('./db/MySQL')

const cors = require('cors')

const app = express();

const cors_origins = process.env.CORS_ORIGINS.split(',');

app.use(cors({origin: [cors_origins]}));



sequelize.initClientDbConnection()


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

module.exports = app;
