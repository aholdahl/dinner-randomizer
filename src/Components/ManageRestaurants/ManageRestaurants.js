import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddRestaurant from '../AddRestaurant/AddRestaurant.js';
import RestaurantItem from './RestaurantItem.js';

class ManageRestaurants extends Component {

    componentDidMount() {
        this.props.dispatch({
            type: 'FETCH_RESTAURANTS'
        });
    }

    render() {
        return (
            <>
                <h3>Restaurants</h3>
                <AddRestaurant />
                <table>
                    <thead>
                        <tr>
                            <th>Restaurant</th>
                            <th>Menu URL</th>
                            <th>Image</th>
                            <th>Address</th>
                            <th>Phone Number</th>
                            <th>Delivers?</th>
                            <th>Reservation?</th>
                            <th>Price Range</th>
                            <th>Categories</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.restaurants.map((restaurant) => {
                            return (
                                <RestaurantItem restaurant={restaurant}/>
                            )
                        })}
                    </tbody>
                </table>
                <hr />
            </>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        restaurants: store.restaurantReducer
    }
}

export default connect(mapStateToProps)(ManageRestaurants);