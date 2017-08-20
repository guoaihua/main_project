var mongoose=require('mongoose');
var db=mongoose.connect('mongodb://localhost/test');

var DataSchema=new mongoose.Schema({
	ip:{type:String},
	adress:{type:String},
	time:{type:Date,default:Date.now}
});

var MesSchema=new mongoose.Schema({
	name:{type:String},
	qq:{type:Number},
	email:{type:String},
	phone:{type:Number},
	message:{type:String},
	time:{type:Date,default:Date.now}
});

mongoose.model('usersInfo',DataSchema);
mongoose.model('mesInfo',MesSchema);