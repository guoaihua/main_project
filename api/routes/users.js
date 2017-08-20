var express = require('express');
var router = express.Router();
var path=require('path');
var bodyParser=require('body-parser');
var mongoose=require('mongoose');
require('../config/mongoose.js');
var count=0;

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/:id', function(req, res, next) {
  res.sendFile(path.join(__dirname,'../musics',req.params.id+'.mp3'));
});

router.post('/saveInfo', function(req, res, next) {

	  var usersModel=mongoose.model('usersInfo');
	  var data=new usersModel({
	  	ip:req.body.ip,
	  	adress:req.body.adress,
	  	time:req.body.time
	  });

	  data.save(function(err){
	  	console.log(err);
	  });
	  count++;
      res.send({count:count});
});

router.post('/saveMessage', function(req, res, next) {
		var mesModel=mongoose.model('mesInfo');
 		 var data=new mesModel({
		  	name:req.body.name,
		  	  qq:req.body.qq,
		  	  email:req.body.email,
		  	  phone:req.body.phone,		  			  	
			  message:req.body.message,
			  time:req.body.time
	  });

  data.save(function(err){
	  	console.log(err);
	  });
  res.send("发送成功！");
});

module.exports = router;
