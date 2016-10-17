var express = require('express');
var bodyParser = require('body-parser');
var partials = require('express-partials');
var path = require('path');
var handler = require('./request-handler');

var app = express();

app.use(partials());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.use('/', handler.fetchMovies);
app.post('/', handler.saveMovie);




app.set('port', 8080);
console.log('MovieLog listening on port: ', app.get('port'))
app.listen(app.get('port'));