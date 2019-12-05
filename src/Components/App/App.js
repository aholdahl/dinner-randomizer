import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Nav from '../Nav/Nav.js';
import Home from '../Home/Home.js';
import ManageCategories from '../ManageCategories/ManageCategories.js';
import ManageDifficulty from '../ManageDifficulty/ManageDifficulty.js';
import ManageDishes from '../ManageDishes/ManageDishes.js';
import ManageIngredients from '../ManageIngredients/ManageIngredients.js';
import ManagePrices from '../ManagePrices/ManagePrices.js';
import ManageRestaurants from '../ManageRestaurants/ManageRestaurants.js';
// import Admin from '../Admin/Admin.js';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <Router className="App">
        <Nav/>
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route exact path="/home" component={Home} />
          <Route exact path="/categories" component={ManageCategories}/>
          <Route exact path="/difficulty" component={ManageDifficulty} />
          <Route exact path="/dishes" component={ManageDishes} />
          <Route exact path="/ingredients" component={ManageIngredients} />
          <Route exact path="/prices" component={ManagePrices} />
          <Route exact path="/restaurants" component={ManageRestaurants} />
          {/* <Route exact path="/admin" component={Admin} /> */}
          <Route render={() => <h2>404: Page not found</h2>} />
        </Switch>
      </Router>
    );
  }
}

export default connect()(App);