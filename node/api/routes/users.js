var express = require('express');
var router = express.Router();
var path=require('path');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});





router.get('/:id', function(req, res, next) {
  res.sendFile(path.join(__dirname,'../musics',req.params.id+'.mp3'));
});

module.exports = router;
