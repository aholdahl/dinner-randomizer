import React, { Component } from 'react';
import { connect } from 'react-redux';

class ManageOptions extends Component {

    // componentDidMount(){
    //     this.props.dispatch({
    //         type: 'FETCH_CUISINES'
    //     });
    //     this.props.dispatch({
    //         type: 'FETCH_DIFFICULTY'
    //     });
    //     this.props.dispatch({
    //         type: 'FETCH_PRICES'
    //     });
    //     this.props.dispatch({
    //         type: 'FETCH_DISHES'
    //     });
    //     this.props.dispatch({
    //         type: 'FETCH_RESTAURANTS'
    //     });
    // }

    render() {
        return (
            <>
                <h2>Manage Options</h2>
                <h3>Cuisines</h3>
                {/* {this.props.store.cuisineReducer.map((cuisine)=>{
                    return (
                        <p key={cuisine.id}>{cuisine.cuisine}</p>
                        )
                })} */}
                <h3>Difficulty Levels</h3>
                {/* {this.props.store.difficultyReducer.map((level)=>{
                    return (
                        <p key={level.id}>{level.difficulty}</p>
                    )
                })} */}
                <h3>Price Ranges</h3>
                {/* {this.props.store.priceReducer.map((range)=>{
                    return (
                        <p key={range.id}>{range.price}</p>
                    )
                })} */}
                <h3>Dishes</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Dish</th>
                            <th>Image</th>
                            <th>Prep Time</th>
                            <th>Difficulty</th>
                            <th>Cuisine</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {this.props.store.dishReducer.map((dish)=>{
                            return (
                                <tr key={dish.id}>
                                    <td>{dish.dish}</td>
                                    <td>{dish.image}</td>
                                    <td>{dish.prep_time}</td>
                                    <td>{dish.difficulty}</td>
                                    <td>{dish.cuisine}</td>
                                </tr>
                            )
                        })} */}
                    </tbody>
                </table>

                <h3>Restaurants</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Restaurant</th>
                            <th>Image</th>
                            <th>Delivers?</th>
                            <th>Price</th>
                            <th>Cuisine</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {this.props.store.restaurantReducer.map((restaurant)=>{
                            return (
                                <tr key={restaurant.id}>
                                    <td>{restaurant.restaurant}</td>
                                    <td>{restaurant.image}</td>
                                    <td>{restaurant.delivers}</td>
                                    <td>{restaurant.price}</td>
                                    <td>{restaurant.cuisine}</td>
                                </tr>
                            )
                        })} */}
                    </tbody>
                </table>
            </>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        store
    }
}

export default connect(mapStateToProps)(ManageOptions);