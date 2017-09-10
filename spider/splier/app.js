var express = require('express');
var app=express();
var request=require('request');
var cheerio=require('cheerio');
var fs=require('fs');
var num=0;
app.get('/',function(req,res) {
	// body...
	 var request = require('request');
	request('https://movie.douban.com/', function (error, response, body) {
/* 	 console.log('error:', error); // Print the error if one occurred 
  	console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
  	console.log('body:', body); // Print the HTML for the Google homepage*/
	$=cheerio.load(body);
 	var data=[];
  var ws1 = fs.createWriteStream('./data/message.txt', 'utf-8');
  $('.ui-slide-content .ui-slide-item').each(function(i,e){
        //e==this;
        num++;
  			var obj='obj'+1;
  			obj={};
  			obj.title=$(e).attr('data-title');
  			obj.rate=$(e).find('.subject-rate').text();
        var mes=num+':'+obj.title+' '+obj.rate+'\n';
        ws1.write(mes);
  			data.push(obj);
  	})
  	res.send(data);
	});
});
app.listen(3000);
