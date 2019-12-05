import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <header>
                <h1>In The Mood</h1>
                <nav>
                    <NavLink to="/home" title="Click to view Randomizer" activeClassName="currentPage">Home</NavLink>
                    <NavLink to="/dishes" title="Click to manage Dishes" activeClassName="currentPage">Dishes</NavLink>
                    <NavLink to="/restaurants" title="Click to manage Restaurants" activeClassName="currentPage">Restaurants</NavLink>
                    <NavLink to="/categories" title="Click to manage Categories" activeClassName="currentPage">Categories</NavLink>
                    <NavLink to="/ingredients" title="Click to manage Ingredients" activeClassName="currentPage">Ingredients</NavLink>
                    <NavLink to="/difficulty" title="Click to manage Difficulties" activeClassName="currentPage">Difficulties</NavLink>
                    <NavLink to="/prices" title="Click to manage Prices" activeClassName="currentPage">Prices</NavLink>
                </nav>
            </header>
        )
    }
}

export default Nav;