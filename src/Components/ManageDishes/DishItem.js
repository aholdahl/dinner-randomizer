import React, { Component } from 'react';
import { connect } from 'react-redux';
import DifficultyDropdown from '../DifficultyDropdown/DifficultyDropdown';
import CategoryDropdown from '../CategoryDropdown/CategoryDropdown.js';
import IngredientDropdown from '../IngredientDropdown/IngredientDropdown.js';

class DishItem extends Component {
    state = {
        editMode: false,
        id: 0,
        dish: '',
        recipe_url: '',
        image_url: '',
        prep_time: '',
        servings: 0,
        difficulty_id: 0,
        category: 0,
        categories: [],
        ingredient: 0,
        ingredients: []
    }

    toggleEditMode = () => {
        this.setState({
            ...this.state,
            editMode: !this.state.editMode,
            ...this.props.dish
        })
    }

    setChanges = (event, property) => {
        this.setState({
            ...this.state,
            [property]: event.target.value
        })
    }

    updateDish = () => {
        this.props.dispatch({
            type: 'UPDATE_DISH',
            payload: {
                ...this.state
            }
        })
        this.toggleEditMode();
    }

    deleteDish = () => {
        this.props.dispatch({
            type: 'DELETE_DISH',
            payload: {
                id: this.props.dish.id
            }
        })
    }

    render() {
        return (
            <>
                {this.state.editMode ?
                    <tr key={`dish ${this.state.id}`}>
                        <td><input value={this.state.dish} onChange={(event) => { this.setChanges(event, 'dish')}}/></td>
                        <td><input value={this.state.recipe_url} onChange={(event) => { this.setChanges(event, 'recipe_url') }}/></td>
                        <td><input value={this.state.image} onChange={(event) => { this.setChanges(event, 'image') }}/></td>
                        <td><input value={this.state.prep_time} onChange={(event) => { this.setChanges(event, 'prep_time') }}/></td>
                        <td><input value={this.state.servings} onChange={(event) => { this.setChanges(event, 'servings') }}/></td>
                        {/* Need to set up categories for add and delete */}
                        <td><DifficultyDropdown selectedDifficulty={this.state.difficulty_id}/></td>
                        <td>{this.state.categories[0] !== null && this.state.categories.map((category) => {
                            return <p key={`category ${category.id}`}>{category.category}</p>
                        })}</td>
                        <td>{this.state.ingredients[0] !== null && this.state.ingredients.map((ingredient) => {
                            return <p key={`ingredient ${ingredient.id}`}>{ingredient.ingredient}</p>
                        })}</td>
                        <td><button onClick={this.updateDish}>Save</button></td>
                        <td><button onClick={this.deleteDish}>Delete</button></td>
                    </tr>
                    :
                    <tr key={`dish ${this.props.dish.id}`}>
                        <td>{this.props.dish.dish}</td>
                        <td><a href={this.props.dish.recipe_url}>{this.props.dish.recipe_url}</a></td>
                        <td><img src={this.props.dish.image}/></td>
                        <td>{this.props.dish.prep_time}</td>
                        <td>{this.props.dish.servings}</td>
                        <td>{this.props.dish.difficulty}</td>
                        <td>{this.props.dish.categories[0] !== null && this.props.dish.categories.map((category) => {
                            return <p key={`category ${category.id}`}>{category.category}</p>
                        })}</td>
                        <td>{this.props.dish.ingredients[0] !== null && this.props.dish.ingredients.map((ingredient) => {
                            return <p key={`ingredient ${ingredient.id}`}>{ingredient.ingredient}</p>
                        })}</td>
                        <td><button onClick={this.toggleEditMode}>Edit</button></td>
                        <td><button onClick={this.deleteDish}>Delete</button></td>
                    </tr>
                }
            </>
        )
    }
}

export default connect()(DishItem);