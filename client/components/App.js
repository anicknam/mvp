import React from 'react';
import MovieList from 'MovieList';
import MovieListEntry from 'MovieListEntry';
import SearchMovie from 'SearchMovie';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.serverURL = 'http://127.0.0.1:8000/api/movies';

    this.state = {
    	moviesToRender: []
    }
  }
  
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


  searchHandler (title) {

    // var searchedMovieTitle = refs.search.value;
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

        <div>
          <SearchMovie searchHandler={this.searchHandler.bind(this)}/>
        </div>

        <div> 
          <MovieList movies={this.state.moviesToRender}/>
        </div>
  	  </div>
  	)
  }

};

export default App;
