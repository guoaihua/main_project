var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');
require('../config/mongoose.js');
var bodyParser=require('body-parser');

/* GET home page. */
/* 获取模版model*/
var DataModel=mongoose.model('user');

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/save', function(req, res, next) {
			/*console.log(req.body);*/
			var data=new DataModel({
				name:req.body.name,
				content:req.body.content,
				time:req.body.time
			});

			console.log(data);
			data.save(function (err) {
				console.log(err);
			});

			res.send("success!");

});


router.post('/find', function(req, res, next) {
			// 首先获取当前页面
			var page=req.body.nowPage
		/*	console.log(req.body.nowPage);*/
			var query=DataModel.find({});
			// 从6*当前页面-1开始查找

	
			query.skip((page-1)*6);
			query.limit(6);
			query.exec(function(err,docs) {		
					DataModel.count(function (err,count) {
						/*console.log(count);*/
					jsonArray={total:count,rows:docs};
				 	 res.json(jsonArray);
					});

			});
});


module.exports = router;
