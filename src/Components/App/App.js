import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import './App.css';
// import SampleComponent from '../SampleComponent/SampleComponent.js';
import Home from '../Home/Home.js';
import AddDish from '../AddDish/AddDish.js';
import AddRestaurant from '../AddRestaurant/AddRestaurant.js';
import ManageOptions from '../ManageOptions/ManageOptions.js';

class App extends Component {

  componentDidMount() {
    // axios.get('/test')
    //   .then((response) => {
    //     console.log(response.data);
    //   });
    // this.props.dispatch({
    //   type: 'DISPATCH_TYPE'
    // });
    // this.props.dispatch({
    //   type: 'SAMPLE_SAGA'
    // });
  }

  render() {
    return (
      <div className="App">
        <h1>In the Mood</h1>
        {/* <SampleComponent/> */}
        <Home />
        <AddDish />
        <AddRestaurant />
        <ManageOptions />
      </div>
    );
  }
}

export default connect()(App);