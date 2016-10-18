import React from 'react';

var MovieListEntry = (props) => (
	<div className = "movie-list-entry">
      <span className="movie-title">{props.movie.title}</span>
      <button onClick={() => (props.showMovieInfoToggle(props.movie["_id"]))}>More Info</button>
      {props.currShownMovieKey === props.movie["_id"] ? <span>HELLO</span> : null}
      <button className="watch-toggle">{props.movie.watched ? "Watched" : "UnWatched"}</button>
	</div>
);

export default MovieListEntry;