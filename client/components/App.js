class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
    	moviesToRender: window.movieData
    }

  }

  render () {
  	return (
  	  <div>
        <div> 
          {//<MovieList movies={}>
          }
          HELLO
  
        </div>
  
  
  	  </div>
  	)
  }

}



ReactDOM.render(<App />, document.getElementById("app"))
