'use strict'
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', function home(req, res){
	res.sendFile(__dirname + '/views/index.html');
});
	
app.listen(3000, () => {
	console.log('Server running on PORT 3000');
});