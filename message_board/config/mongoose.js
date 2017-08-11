var mongoose=require('mongoose');
var config=require('./config.js');

var db=mongoose.connect(config.url);


var DataSchema=new mongoose.Schema({
	name:{type:String},
	content:{type:String},
	time:{type:String,default:Date.now}
});

mongoose.model('user',DataSchema);	
