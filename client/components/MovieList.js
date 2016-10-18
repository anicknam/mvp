import React from 'react';
import MovieListEntry from 'MovieListEntry';

var MovieList = (props) => (
  <div className = "movie-list">
	  {props.movies.map((movie) => {
	    return <MovieListEntry key={movie["_id"]} movie={movie}/>
	  	})}
  </div>
);

MovieList.propTypes = {
  movies: React.PropTypes.array.isRequired
};

export default MovieList;