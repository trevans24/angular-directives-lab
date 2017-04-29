'use strict'
const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const cardRouter = require('./cardRouter');

app.use(express.static(__dirname + '/public'));

app.use('/cards', cardRouter);

app.get('/', function home(req, res){
	res.sendFile(__dirname + '/views/index.html');
});

app.listen(3000, () => {
	console.log('Server running on PORT 3000');
});