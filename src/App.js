import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Nav from './components/nav';
import './App.css';

class App extends Component {
  render(){

    return (
      <div>
        <Nav />
      </div>
    );
  }
}

export default App;
