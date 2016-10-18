var db = require('./db/config');
var Movie = require('./db/models/Movie');

exports.fetchMovies = function(req, res) {
  // console.log(req.query.watched !== undefined);
  var watched = req.query.watched;
  if (watched !== undefined) {
    Movie.find({watched: watched},function(err, movies){
      if (err) { return res.status(500).send(err) };
      res.status(200).send(movies);
    })
  } else {
  	Movie.find(function(err, movies){
        if (err) { return res.status(500).send(err) }
        res.status(200).send(movies);
  	}); 
  }
};

exports.saveMovie = function(req, res) {
	var title = req.body.title;
	var year = req.body.year;
	var genre = req.body.genre;
	var watched = req.body.watched || false;

    var newMovieEntry = new Movie({
    	title: title,
    	year: year,
    	genre: genre,
    	watched: watched
    });
    
    newMovieEntry.save(function(err, newMovieEntry){
    	if (err) {
    		res.status(500).send(err);
    	} else {
    		res.status(200).send(newMovieEntry);
    	}
    })

};