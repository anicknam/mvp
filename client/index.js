import { Router, Route, browserHistory } from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/movies" component={App}/>
  </Router>
), document.getElementById('app'));