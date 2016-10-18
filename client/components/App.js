import React from 'react';
import MovieList from 'MovieList';
import MovieListEntry from 'MovieListEntry';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.serverURL = 'http://127.0.0.1:8000/api/movies';

    this.state = {
    	moviesToRender: []
    }
  }
  
  componentDidMount () {
    this.getAllMovies((movies) => {
    	this.setState({
    		moviesToRender: movies
    	})
    });
  }


  getAllMovies (cb) {
    $.get(this.serverURL).done((movies) => {
      cb(movies);
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
  	         	this.getAllMovies((movies) => {
  	         		this.setState({
  	         			moviesToRender: movies
  	         		})
  	         	});
  	         },
  	         error: (error) => {
  	         	throw error;
  	         }
  	});

  }


  searchHandler (title) {

  }

  render () {
  	console.log(this.state.moviesToRender);

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
          <MovieList movies={this.state.moviesToRender}/>
        </div>
  	  </div>
  	)
  }

};

//window.App = App
export default App;
// ReactDOM.render(<App />, document.getElementById("app"));
