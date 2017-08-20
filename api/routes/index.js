var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// 数组
//     	var a=[

  			

var data=[
		  		{num:1,name:'故乡的原风景',author:'陈小熊',src:'http://www.guoaihua.com/music/001'},
  				{num:2,name:'爱江山更爱美人',author:'笛子',src:'http://www.guoaihua.com/music/002'},
  				{num:3,name:'初见',author:'笛子',src:'http://www.guoaihua.com/music/003'},
  				{num:4,name:'情深深雨蒙蒙',author:'笛子',src:'http://www.guoaihua.com/music/004'},
  				{num:5,name:'kiss the rain',author:'钢琴',src:'http://www.guoaihua.com/music/005'},
  				{num:6,name:'江南',author:'林俊杰',src:'http://www.guoaihua.com/music/006'},
  				{num:7,name:'一眼万年',author:'林俊杰',src:'http://www.guoaihua.com/music/007'},
  				{num:8,name:'夜的钢琴曲',author:'石进',src:'http://www.guoaihua.com/music/008'},
  				{num:9,name:'匆匆那年',author:'王菲',src:'http://www.guoaihua.com/music/009'},
  				{num:10,name:'恋人心',author:'魏新雨',src:'http://www.guoaihua.com/music/010'},
];

router.post('/getData', function(req, res, next) {
  		res.send(data);
});



module.exports = router;
