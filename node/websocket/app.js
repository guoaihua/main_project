var express = require('express');
var path = require('path');
var app = express();

var server=require('http').createServer(app);
var io=require('socket.io').listen(server);

var index = require('./routes/index');
var users = require('./routes/users');



app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', users);

	io.on('connect',function(socket){	
			socket.on('login',function (name) {
				io.send('客户端接入，欢迎：'+name);
			});		
			socket.on('message',function (data) {
				io.send(data+'\n');
			});
	});

server.listen(8088);
module.exports = app;
