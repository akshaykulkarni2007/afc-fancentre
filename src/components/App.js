import React, { Component } from 'react';

import './App.css';

import Navigation from "./common/Navigation"
import Home from './Homepage/Home'

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Home/>
      </div>
    );
  }
}

export default App;
