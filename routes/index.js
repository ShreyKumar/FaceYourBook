var express = require('express');
var app = express();
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

app.get('/users/sms/send', function(req, res){
	res.send('hello world');
})

module.exports = router;
