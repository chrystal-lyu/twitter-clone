import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Explore from './components/Explore'
import * as serviceWorker from './serviceWorker';

const routing = (
  <Router>
      <Route exact path='/' component={App}/>
      <Route path='/explore' component={Explore}/>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
