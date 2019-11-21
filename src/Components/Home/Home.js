import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {

    getRandomDish = () => {
        this.props.dispatch({
            type: 'FETCH_RANDOM_DISH'
        });
    }

    getRandomRestaurant = () => {
        this.props.dispatch({
            type: 'FETCH_RANDOM_RESTAURANT'
        });
    }

    render() {

        const renderResults =
            <>
                <h4>Tonight, how about: </h4>
                {this.props.restaurant.id && 
                    <>
                        <p>{this.props.restaurant.restaurant} - {this.props.restaurant.address}</p>
                        {this.props.restaurant.menu_url && <a target="_blank" rel="noopener noreferrer" href={this.props.restaurant.menu_url}>View Menu</a>}
                        <br/>
                        <a target="_blank" rel="noopener noreferrer" href={`http://google.com/maps/place/${this.props.restaurant.address}`}>Get Directions</a>
                    </>
                }
                {this.props.dish.id && 
                    <>
                        <p>{this.props.dish.dish}</p>
                        {this.props.dish.recipe_url && <a target="_blank" rel="noopener noreferrer" href={this.props.dish.recipe_url}>View Recipe</a>}
                    </>
                }
            </>

        return (
            <>
                <h2>Eating In or Dining Out?</h2>
                <button onClick={this.getRandomDish}>Eating In</button>
                <button onClick={this.getRandomRestaurant}>Dining Out</button>
                {this.props.restaurant.id || this.props.dish.id ? renderResults : null}
            </>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        restaurant: store.randomRestaurantReducer,
        dish: store.randomDishReducer
    }
}

export default connect(mapStateToProps)(Home);