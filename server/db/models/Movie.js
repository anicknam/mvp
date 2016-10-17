var mongoose = require('mongoose');

var movieSchema = mongoose.Schema({
	title: {type: String, required: true, index: {unique: true}},
	year: {type: Number},
	genre: {type: String},
	watched: {type: Boolean}
});

var Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;