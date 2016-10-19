import React from 'react';

class MovieListEntry extends React.Component {
    
    constructor (props) {
      super (props)
    }

	render () {
      return (
      		<div className = "movie-list-entry">
      	      <span className="movie-title">{this.props.movie.title}</span>
      	        
      		      <button onClick={() => (this.props.currMovieInfoToggle(this.props.movie["_id"]))}>
      		      {(this.props.currMovieInfoKey === this.props.movie["_id"]) ? 'Hide Info' : 'Show Info'}
      		      </button>

      	      {this.props.movie.watched ? 
      	      	<button className="add-review" onClick={() => (this.props.currMovieReviewToggle(this.props.movie["_id"]))}>Add Review</button> : null}

      	      {this.props.movie.watched ? 
      	      	<button className="watch-toggle" 
      	      	        onClick={(e) => (this.props.toggleWatchedHandler(this.props.movie["_id"],this.props.movie.watched))}>Move to UnWatched
      	      	        </button> : null}

      	      {!this.props.movie.watched ? 
      	      	<button className="watch-toggle" 
      	      	        onClick={(e) => (this.props.toggleWatchedHandler(this.props.movie["_id"],this.props.movie.watched))}>Move To Watched
      	      	        </button> : null}
      	      
      	      {(this.props.currMovieInfoKey === this.props.movie["_id"]) ? 
      	        <div>
      	          <span className="movie-year">{this.props.movie.year}</span>
      	        </div>: null}

      	      {(this.props.currMovieInfoKey === this.props.movie["_id"]) ? 
      	        <div>
      	          <span className="movie-genre">{this.props.movie.genre}</span>
      	        </div>: null} 

      	      {(this.props.currMovieReviewKey === this.props.movie["_id"]) ? 
      	        <form onSubmit={this.props.submitReviewHandler.bind(this,this.props.movie["_id"],this.props.movie.watched)}>
      	          <textarea ref="reviewText"></textarea>
      	          <button>Post</button>
      	        </form>: null} 

      		</div>
      	)	
	}
}


export default MovieListEntry;