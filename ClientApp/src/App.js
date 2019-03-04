import React, { Component } from 'react';
import { Route } from 'react-router';
import { Header } from './components/Header';
import { Main } from './components/Main';
import './sass/main.scss'

export default class App extends Component {

  render() {
    return (
      <div>
        <Header/>
        <Main/>
      </div>
    );
  }
}
