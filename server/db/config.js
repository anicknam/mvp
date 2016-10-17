var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/movieLog');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting'))
db.once('open', function(){
	console.log('MonogDB connection open...');
});


module.exports = db;