var express = require('express');
var router = express.Router();

var mongoose=require('mongoose');
var User=mongoose.model('User');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/aa', function(req, res, next) {
  res.send('aaa');
});

router.get('/process_get', function(req, res, next) {
  var user = new User({
  	firstname:req.query.firstname,
  	lastname:req.query.lastname
  });
  user.save(function(err){
  		if(err){
  			res.send('Error');
  			return next();
  		}
  		res.send('插入成功');
/*  		User.find({},function (err,docs) {
  			// body...
  			if(err){
  				res.send('Error');
  				return next();	
  			}
  			res.json(docs);

  		});*/
  	

  });

});



module.exports = router;
