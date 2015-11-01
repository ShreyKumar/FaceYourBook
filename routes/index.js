var express = require('express');
var app = express();
var router = express.Router();
var accountSid = "ACaf468ab025ac8d77eddb28aa341c844b";
var authToken = "f6c289bd97c53b70ec5c83e4c77202fa";

var client = require('twilio')(accountSid, authToken);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });

});
router.post('/minus', function(req, res, next) {
  //res.render('index', { title: 'yolo' });
  /*
  client.messages.create({
    to: "+16478645896",
    from: "+12564454274",
    body: "Your friend is on facebook again!",
    }, function(err, message) {
        console.log(message);
    });
*/
    var bodyParser = require('body-parser')
    app.use( bodyParser.json() );       // to support JSON-encoded bodies
    app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
        extended: true
    }));

    res.json(req.body);

    //app.use(express.json());       // to support JSON-encoded bodies
    //app.use(express.urlencoded()); // to support URL-encoded bodies

});


module.exports = router;
