import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Home from '../Home/Home.js';
import Admin from '../Admin/Admin.js';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>In the Mood</h1>
        <Home />
        <hr />
        <Admin />
      </div>
    );
  }
}

export default connect()(App);