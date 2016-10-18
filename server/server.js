var express = require('express');
var bodyParser = require('body-parser');
var partials = require('express-partials');
var path = require('path');
var handler = require('./request-handler');

var app = express();

app.use(partials());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('../client'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/api/movies', handler.fetchMovies);
app.post('/api/movies', handler.saveMovie);
app.get('*', function (req, res){
  res.sendFile(path.resolve(__dirname, '../client', 'index.html'))
})


app.set('port', 8000);
console.log('MovieLog listening on port: ', app.get('port'))
app.listen(app.get('port'));