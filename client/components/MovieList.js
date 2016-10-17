var MovieList = (props) => (
  <div className = "movie-list">
	  {props.movies.map((movie) => {
	    return <MovieListEntry movie={movie}/>
	  	})}
  </div>
);

window.MovieList = MovieList;