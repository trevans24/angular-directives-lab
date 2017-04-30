var express = require('express');
var app = express();
router = express.Router();
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// public views
app.use(express.static(__dirname + '/public'));

// HTML Endpoint
app.get('/', function home(req, res){
	res.sendFile(__dirname + '/views/index.html');
});

// server
app.listen(3000, () => {
	console.log('Server running on PORT 3000');
});