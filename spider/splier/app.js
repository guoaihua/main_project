var express = require('express');
var app=express();
var request=require('request');
var cheerio=require('cheerio');

app.get('/',function(req,res) {
	// body...
	 var request = require('request');
	request('http://www.iqiyi.com/dianshiju/', function (error, response, body) {
 	 console.log('error:', error); // Print the error if one occurred 
  	console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
  	console.log('body:', body); // Print the HTML for the Google homepage
  	$=cheerio.load(body);
 	var data=[];
  	$('.site-item_l .site-piclist_pic_link').each(function(i,e){
  			var obj='obj'+1;
  			obj={};
  			obj.title=$(e).attr('title');
  			obj.text=$(e).find('.mod-listTitle_right').text() 
  			data.push(obj);
  	})
  	res.send(data);
	});
});

app.listen(3000);
