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

// Require DB models
var db = require('./models');

// GET
app.get('/api/cards', (req,res)=>{
	db.Card.find()
	.exec((err, cards) => {
		if (err){
			console.log("Get error: ",err);
		}
		res.json(cards);
	});
});

// SHOW
app.get('/api/cards/:id', (req,res)=>{
	db.Card.findOne({_id: req.params.id}, (err, data) =>{
		if (err){
			console.log("Show error: ",err);
		}
		res.json(data);
	});
});

// POST
app.post('/api/cards', (req,res)=>{
	var newCard = new db.Card({
		question: req.body.question
	});
	newCard.save((err,card) =>{
		if (err){
			console.log("Save Error: ", err);
		}
		res.json(card);
	});
});

// server
app.listen(3000, () => {
	console.log('Server running on PORT 3000');
});