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

        // const renderResults =
        //     <>
        //         <h4>Tonight, you will be eating: </h4>
        //         <p>Food</p>
        //     </>

        return (
            <>
                <h2>Eating In or Dining Out?</h2>
                <button onClick={this.getRandomDish}>Eating In</button>
                <button onClick={this.getRandomRestaurant}>Dining Out</button>
                {/* {renderResults} */}
            </>
        );
    }
}

export default connect()(Home);