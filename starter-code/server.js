'use strict'
const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', function home(req, res){
	res.sendFile(__dirname + '/views/index.html');
});

let questionList = [
    {question: "What is Batman's guilty pleasure?"},
    {question: "I'm sorry professor, I couldn't complete my homework because _________."},
    {question: "I get by with a little help from _________."},
    {question: "_________. It's a trap!"},
    {question: "The class field trip was completely ruined by _________."},
    {question: "What's my secret power?"}
  ];

let stringCard = JSON.stringify(questionList);

app.listen(3000, () => {
	console.log('Server running on PORT 3000');
});