import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
// import AddDish from '../AddDish/AddDish.js';
// import AddRestaurant from '../AddRestaurant/AddRestaurant.js';
import Home from '../Home/Home.js';
import ManageOptions from '../ManageOptions/ManageOptions.js';

class App extends Component {

  // componentDidMount() {
  //   this.props.dispatch({
  //     type: 'FETCH_CATEGORIES'
  //   });
  //   this.props.dispatch({
  //     type: 'FETCH_DIFFICULTY'
  //   });
  //   this.props.dispatch({
  //     type: 'FETCH_PRICES'
  //   });
  //   this.props.dispatch({
  //     type: 'FETCH_DISHES'
  //   });
  //   this.props.dispatch({
  //     type: 'FETCH_RESTAURANTS'
  //   });
  // }

  render() {
    return (
      <div className="App">
        <h1>In the Mood</h1>
        <Home />
        {/* <hr/>
        <AddDish />
        <hr />
        <AddRestaurant /> */}
        <hr />
        <ManageOptions />
      </div>
    );
  }
}

export default connect()(App);