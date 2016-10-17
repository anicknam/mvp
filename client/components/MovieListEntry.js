var MovieListEntry = (props) => (
	<div className = "movie-list-entry">
      <span>{props.movie.title}</span>
	</div>
);

window.MovieListEntry = MovieListEntry;