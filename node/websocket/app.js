var express = require('express');
var path = require('path');
var app = express();
var server=require('http').createServer(app);
var io=require('socket.io').listen(server);
var mongoose1=require('./config/mongoose.js');
var mongoose=require('mongoose');


var index = require('./routes/index');
var users = require('./routes/users');

var db=mongoose1();

// 获取发布的model'data'
var DataModel=mongoose.model('data');
// 静态资源分配
app.use(express.static(path.join(__dirname, 'public')));
app.use('/users', users);

// 全局socket对象 监听connet事件
io.on('connect',function(socket){	
			// 监听客户端连接
			socket.on('login',function (name) {
				io.send('客户端接入，欢迎：'+name);
			});		

			//将用户信息存入数据库
			socket.on('message',function (data) {
				console.log(data);
				let arr=data.split(':');
				let name1=arr[0];
				console.log(name1);
				let content1=arr[1];
				console.log(content1);
				var DataEntity=new DataModel({
					name:name1,
					content:content1
				});
				DataEntity.save(function(err,doc){
					if(err){
						console.log(err);
					}else{
					/*	console.log('success'+doc);*/
					var query=DataModel.find({});
					query.sort({'time':-1}).limit(8);
					query.exec(function(err,doc){
						console.log(doc);

						console.log(doc[0]);
						io.sockets.emit('message',doc);
				})
					}
				});


				
			});
	});






server.listen(8088);
