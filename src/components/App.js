import React, { Component } from 'react';

import './App.css';

import Navigation from './common/Navigation'
import Footer from './common/Footer'
import Home from './Homepage/Home'

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Home/>
        <Footer />
      </div>
    );
  }
}

export default App;
