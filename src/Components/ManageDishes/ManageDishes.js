import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddDish from '../AddDish/AddDish.js';

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
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.dishes.map((dish) => {
                            return (
                                <tr key={dish.id}>
                                    <td>{dish.dish}</td>
                                    <td>{dish.recipe_url}</td>
                                    <td>{dish.image}</td>
                                    <td>{dish.prep_time}</td>
                                    <td>{dish.servings}</td>
                                    <td>{dish.difficulty}</td>
                                    <td>{dish.categories[0] !== null && dish.categories.map((category) => {
                                        return <p key={category.id}>{category.category}</p>
                                    })}</td>
                                    <td>{dish.ingredients[0] !== null && dish.ingredients.map((ingredient) => {
                                        return <p key={ingredient.id}>{ingredient.ingredient}</p>
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
        dishes: store.dishReducer
    }
}

export default connect(mapStateToProps)(ManageDishes);