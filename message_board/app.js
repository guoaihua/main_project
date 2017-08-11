var express = require('express');
var path = require('path');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// 获取发布的model


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.html',require('ejs').__express);//两个下划线
app.set('view engine', 'html');

app.use('/', index);
app.use('/users', users);

app.set('views',__dirname+'/views');
app.use(express.static(path.join(__dirname, 'public')));



module.exports = app;

