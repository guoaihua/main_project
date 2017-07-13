var mongoose=require('mongoose');
var UserSchema = new mongoose.Schema({
	firstname:String,
	lastname:String,
	createTime:Date
});

mongoose.model('User',UserSchema);