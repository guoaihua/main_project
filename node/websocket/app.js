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
var count=0;
// 获取发布的model'data'
var DataModel=mongoose.model('data');
// 静态资源分配
app.use(express.static(path.join(__dirname, 'public')));
app.use('/users', users);

// 全局socket对象 监听connet事件
	io.on('connect',function(socket){	
			
			// 监听客户端连接
			socket.on('login',function (name) {
				count=count+1;
				io.send('客户端接入，欢迎：'+name);
				socket.username=name;
				var query=DataModel.find({});
				query.sort({'time':-1}).limit(5);
				query.exec(function(err,doc){
/*						console.log(doc);
						console.log(doc[0]);*/
						socket.emit('message',doc);
						});
			io.sockets.emit('count',count);

			});		

			//将用户信息存入数据库
			socket.on('message',function (data) {
				/*console.log(data);*/
				let arr=data.split(':');
				let name1=arr[0];
				let content1=arr[1];	
				let time=new Date();			
				var DataEntity=new DataModel({
					name:name1,
					content:content1,
					time:time.toLocaleString()
				});
				console.log(time);
				DataEntity.save(function(err,doc){
					if(err){
						console.log(err);
					}else{
					/*	console.log('success'+doc);*/
					var query=DataModel.find({});
					query.sort({'time':-1}).limit(1);
					query.exec(function(err,doc){
/*						console.log(doc);
						console.log(doc[0]);*/
						io.sockets.emit('message',doc);
						});
								}
				});
				
			});

 		   socket.on('disconnect', function () { 
      		  console.log('socket disconnect');
      		  count--;
      		  io.sockets.emit('disc',socket.username+'已断开连接');
      		  io.sockets.emit('count',count);
   		 });

	});








server.listen(8088);
