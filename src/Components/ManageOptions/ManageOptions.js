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
                    return (<p key={cuisine.id}>{cuisine.cuisine}</p>)
                })} */}
                <h3>Difficulty Levels</h3>
                {/* {this.props.store.difficultyReducer.map((level)=>{
                    return (<p key={level.id}>{level.difficulty}</p>)
                })} */}
                <h3>Price Ranges</h3>
                {/* {this.props.store.priceReducer.map((range)=>{
                    return (<p key={range.id}>{range.price}</p>)
                })} */}
                <h3>Dishes</h3>
                {/* {this.props.store.dishReducer.map((dish)=>{
                    return (<p key={dish.id}>{dish.dish}</p>)
                })} */}
                <h3>Restaurants</h3>
                {/* {this.props.store.restaurantReducer.map((restaurant)=>{
                    return (<p key={restaurant.id}>{restaurant.restaurant}</p>)
                })} */}
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