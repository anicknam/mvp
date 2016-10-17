class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
    	moviesToRender: window.movieData
    }
  }


  submitHandler (e) {
  	e.preventDefault();

  	var newMovieEntry = {
      title: this.refs.title.value,
      year: this.refs.year.value,
      genre: this.refs.genre.value
  	};

    var currMoviesToRender = this.state.moviesToRender;
    currMoviesToRender.splice(0,0,newMovieEntry);
    this.setState({
    	moviesToRender: currMoviesToRender
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
        

        <div> 
          <MovieList movies={this.state.moviesToRender}/>
        </div>
  	  </div>
  	)
  }

};



ReactDOM.render(<App />, document.getElementById("app"));
