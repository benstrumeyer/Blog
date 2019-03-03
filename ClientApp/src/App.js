import React, { Component } from 'react';
import { Route } from 'react-router';
import { Home } from './components/Home';
import { BrowserRouter as Router } from 'react-router-dom';
import './appStyles.scss'

export default class App extends Component {

  render() {
    return (
      <Router>
        <Route exact path='/' component={Home} />
      </Router>
    );
  }
}
