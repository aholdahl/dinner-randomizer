import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddRestaurant from '../AddRestaurant/AddRestaurant.js';

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
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.restaurants.map((restaurant) => {
                            return (
                                <tr key={restaurant.id}>
                                    <td>{restaurant.restaurant}</td>
                                    <td>{restaurant.menu_url}</td>
                                    <td><img src={restaurant.image} alt={restaurant.restaurant} /></td>
                                    <td>{restaurant.address}</td>
                                    <td>{restaurant.phone_number}</td>
                                    <td><input type="checkbox" checked={restaurant.delivers} disabled={true} /></td>
                                    <td><input type="checkbox" checked={restaurant.reservation} disabled={true} /></td>
                                    <td>{restaurant.price}</td>
                                    <td>{restaurant.categories[0] !== null && restaurant.categories.map((category) => {
                                        return <p key={category.id}>{category.category}</p>
                                    })}</td>
                                </tr>
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