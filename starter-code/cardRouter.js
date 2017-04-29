var express = require('express');
var bodyParser = require('body-parser');
router = express.Router();

let cards = [
    {"id":1,question: "What is Batman's guilty pleasure?"},
    {"id":2,question: "I'm sorry professor, I couldn't complete my homework because _________."},
    {"id":3,question: "I get by with a little help from _________."},
    {"id":4,question: "_________. It's a trap!"},
    {"id":5,question: "The class field trip was completely ruined by _________."},
    {"id":6,question: "What's my secret power?"}
  ];

let stringCard = JSON.stringify(cards);

//GET
router.get('/', (req, res) => {
	res.json(cards);
	console.log("INDEX");
});

//SHOW
router.get('/:id', (req, res) => {
	var id = req.params.id;
	res.json(cards[id-1]);
	console.log("SHOW");
});

// POST
router.post('/', (req, res) => {
	console.log("POST");
	cards.push(req.body);
	res.end();
});

 module.exports = router;