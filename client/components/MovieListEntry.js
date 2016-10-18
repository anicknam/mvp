import React from 'react';

var MovieListEntry = (props) => (
	<div className = "movie-list-entry">
      <span className="movie-title">{props.movie.title}</span>

      <button onClick={() => (props.showMovieInfoToggle(props.movie["_id"]))}>
      {(props.currShownMovieKey === props.movie["_id"]) ? 'Hide Info' : 'Show Info'}
      </button>

      {/*{props.movie.watched ? <button className="watch-toggle">Add Review</button> : null}*/}
      {props.movie.watched ? 
      	<button className="watch-toggle" onClick={(e) => (props.toggleWatchedHandler(props.movie["_id"],props.movie.watched))}>Move to UnWatched</button> : null}

      {!props.movie.watched ? 
      	<button className="watch-toggle" onClick={(e) => (props.toggleWatchedHandler(props.movie["_id"],props.movie.watched))}>Move To Watched</button> : null}
      
      {(props.currShownMovieKey === props.movie["_id"]) ? 
        <div>
          <span className="movie-year">{props.movie.year}</span>
        </div>: null}

      {(props.currShownMovieKey === props.movie["_id"]) ? 
        <div>
          <span className="movie-genre">{props.movie.genre}</span>
        </div>: null} 

	</div>
);

export default MovieListEntry;