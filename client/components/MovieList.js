import React from 'react';
import MovieListEntry from 'MovieListEntry';

var MovieList = (props) => (
  <div className = "movie-list">
	  {props.movies.map((movie) => {
	    return <MovieListEntry key={movie["_id"]} 
	                           movie={movie} 
	                           currMovieInfoToggle={props.currMovieInfoToggle}
	                           currMovieReviewToggle={props.currMovieReviewToggle} 
	                           currMovieInfoKey={props.currMovieInfoKey}
	                           currMovieReviewKey={props.currMovieReviewKey}  
	                           toggleWatchedHandler={props.toggleWatchedHandler}
	                           submitReviewHandler={props.submitReviewHandler}/>
	  	})}
  </div>
);

MovieList.propTypes = {
  movies: React.PropTypes.array.isRequired
};

export default MovieList;