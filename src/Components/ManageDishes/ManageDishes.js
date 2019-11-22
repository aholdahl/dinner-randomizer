import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddDish from '../AddDish/AddDish.js';
import DishItem from './DishItem.js';

class ManageDishes extends Component {

    componentDidMount() {
        this.props.dispatch({
            type: 'FETCH_DISHES'
        });
    }

    render() {
        return (
            <>
                <h3>Dishes</h3>
                <AddDish />
                <table>
                    <thead>
                        <tr>
                            <th>Dish</th>
                            <th>Recipe URL</th>
                            <th>Image</th>
                            <th>Prep Time</th>
                            <th>Servings</th>
                            <th>Difficulty</th>
                            <th>Categories</th>
                            <th>Ingredients</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.dishes.map((dish) => {
                            return (
                                <DishItem dish={dish}/>
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
        dishes: store.dishReducer
    }
}

export default connect(mapStateToProps)(ManageDishes);