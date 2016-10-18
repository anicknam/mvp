import React from 'react';

var MovieListEntry = (props) => (
	<div className = "movie-list-entry">
      <span className="movie-title">{props.movie.title}</span>
	</div>
);

//window.MovieListEntry = MovieListEntry;
export default MovieListEntry;