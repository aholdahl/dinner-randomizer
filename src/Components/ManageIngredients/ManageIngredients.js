import React, { Component } from 'react';
import { connect } from 'react-redux';
import IngredientItem from './IngredientItem.js';

class ManageIngredients extends Component {

    state = {
        ingredient: ''
    }

    componentDidMount() {
        this.props.dispatch({
            type: 'FETCH_INGREDIENTS'
        });
    }

    handleChange = (event, property) => {
        this.setState({
            ...this.state,
            [property]: event.target.value
        });
    }

    handleSubmit = (property) => {
        this.props.dispatch({
            type: 'ADD_NEW_INGREDIENT',
            payload: { ingredient: this.state.ingredient }
        })
        this.setState({
            ...this.state,
            [property]: ''
        });
    }

    render() {
        return (
            <>
                <h3>Ingredients</h3>
                <input title="Type new ingredient option here" placeholder="Enter new ingredient" type="text" onChange={(event) => { this.handleChange(event, 'ingredient') }} value={this.state.ingredient} />
                <button onClick={() => { this.handleSubmit('ingredient') }}>Add New Ingredient</button>
                <table>
                    <thead>
                        <tr>
                            <th>Ingredient</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.ingredient.map((ingredient) => {
                            return (
                                <IngredientItem ingredient={ingredient} />
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
        ingredient: store.ingredientReducer
    }
}

export default connect(mapStateToProps)(ManageIngredients);