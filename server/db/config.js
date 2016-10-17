var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/movielog');

var db = mongoose.connection;






module.exports = db;