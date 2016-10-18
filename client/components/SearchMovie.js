import React from 'react';


var SearchMovie = (props) => (
	<div className = "movie-search">
	  <input className="search-box" placeholder="Search movie title..." onChange={(e) => (props.searchHandler(e.target.value))}/>
	  <button>Search</button>	
	</div>
);


// class SearchMovie extends React.Component {
//   constructor (props) {
//   	super(props);
//   }

//   render () {
//   	return (
// 	  <div>
// 	    <form className = "movie-search" onSubmit={(e) => (this.props.searchHandler(this.refs))}>
//           <input className="search-box" ref="search" placeholder="Search movie title..."/>
//           <button>Search</button>
// 	    </form>
// 	  </div>
//   	)
//   }

// }

export default SearchMovie;