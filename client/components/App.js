import React from 'react';
import MovieList from 'MovieList';
import MovieListEntry from 'MovieListEntry';
import SearchMovie from 'SearchMovie';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.serverURL = 'http://127.0.0.1:8000/api/movies';

    this.state = {
    	moviesToRender: [],
    	showMovieInfo: false,
    	currShownMovieKey: 1
    }
  }
  
  // -----------------------------------------------------------------------------
  // GET ALL MOVIES
  // -----------------------------------------------------------------------------
  componentDidMount () {
    this.getAllMovies();
  }


  getAllMovies () {
    $.get(this.serverURL).done((movies) => {
      this.setState({
      	moviesToRender: movies
      })
    }).fail((err) => {
    	throw err;
    })
  }

  // -----------------------------------------------------------------------------
  // GET FILTERED MOVIES
  // -----------------------------------------------------------------------------
  getFilteredMovies (watched) {
  	
  	$.ajax({
  	         type: "GET",
  	         url: this.serverURL + '?watched=' + watched.toString(),
  	         success: (movies) => {
  	         	  this.setState({
  	         		  moviesToRender: movies
  	         	  })
  	         	}
  	         ,
  	         error: (error) => {
  	         	throw error;
  	         }
  	});
    
  }


  // -----------------------------------------------------------------------------
  // ADD MOVIE SUBMIT HANDLER
  // -----------------------------------------------------------------------------
  submitHandler (e) {
  	e.preventDefault();

  	var newMovieEntry = {
      title: this.refs.title.value,
      year: this.refs.year.value,
      genre: this.refs.genre.value
  	};

  	$.ajax({
  	         type: "POST",
  	         url: this.serverURL,
  	         data: JSON.stringify(newMovieEntry),
  	         dataType: "json",
  	         contentType: "application/json; charset=utf-8",
  	         success: (data) => {
  	         	this.getAllMovies();
  	         	}
  	         ,
  	         error: (error) => {
  	         	throw error;
  	         }
  	});

  }


  // -----------------------------------------------------------------------------
  // SEARCH MOVIE HANDLER
  // -----------------------------------------------------------------------------
  searchHandler (title) {

    if (title){
      var currMoviesToRender = this.state.moviesToRender;
      currMoviesToRender.forEach((movie)=> {
    	  if (movie.title.toLowerCase() === title.toLowerCase()) {
    		  this.setState({
    			  moviesToRender: [movie]
    		  })
    	  }
      })	
    } else {
      this.getAllMovies();
    }

  }

  // -----------------------------------------------------------------------------
  // SHOW MOVIE INFO HANDLER
  // -----------------------------------------------------------------------------
  showMovieInfoToggle (key) {
    var newKey = (key === this.state.currShownMovieKey) ? 1 : key;
    this.setState({
    	currShownMovieKey: newKey
    })
  }



  render () {
  	return (
  	  <div>
  	    <div> 
  	      <form className="submit-form" onSubmit={this.submitHandler.bind(this)}>
  	        <label className="label">Title</label>
  	        <input type="text" name="title" ref="title"/>
  	        <label className="label">Year</label>
  	        <input type="text" name="year" ref="year"/>
  	        <label className="label">Genre</label>
  	        <input type="text" name="genre" ref="genre"/>
  	        <button>Add Movie</button>
  	      </form>
  	    </div>

        <div className="search-bar">
          <SearchMovie searchHandler={this.searchHandler.bind(this)}/>
        </div>

        <div className = "nav-buttons">
            <button className="watch-button" onClick={(e) => (this.getAllMovies())}>All Movies</button>
            <button className="watch-button" onClick={(e) => (this.getFilteredMovies(false))}>UnWatched</button>
            <button className="watch-button" onClick={(e) => (this.getFilteredMovies(true))}>Watched</button>
        </div>

        <div> 
          <MovieList movies={this.state.moviesToRender} showMovieInfoToggle={this.showMovieInfoToggle.bind(this)} currShownMovieKey={this.state.currShownMovieKey}/>
        </div>
  	  </div>
  	)
  }

};

export default App;
