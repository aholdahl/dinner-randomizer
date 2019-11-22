import React, { Component } from 'react';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';

import CategoryDropdown from '../CategoryDropdown/CategoryDropdown.js';
import DifficultyDropdown from '../DifficultyDropdown/DifficultyDropdown.js';
import IngredientDropdown from '../IngredientDropdown/IngredientDropdown.js';

class AddDish extends Component {

    state = {
        dish: '',
        recipe_url: '',
        image: '',
        prep_time: '',
        servings: 0,
        difficulty_id: 0,
        category_id: 0,
        categories: [],
        ingredient_id: 0,
        ingredients: []
    }

    componentDidMount() {
        this.props.dispatch({
            type: 'FETCH_CATEGORIES'
        });
        this.props.dispatch({
            type: 'FETCH_INGREDIENTS'
        });
    }

    handleDishInput = (event, property) => {
        this.setState({
            ...this.state,
            [property]: event.target.value
        });
    }

    storeCategory = (event) => {
        event.preventDefault();
        this.setState({
            ...this.state,
            categories: [...this.state.categories, Number(this.state.category_id)],
        });
    }

    storeIngredient = (event) => {
        event.preventDefault();
        this.setState({
            ...this.state,
            ingredients: [...this.state.ingredients, Number(this.state.ingredient_id)],
        });
    }

    submitNewDish = (event) => {
        event.preventDefault();
        Swal.fire({
            title: 'Please confirm',
            text: 'Are you sure you are ready to add this dish?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Add Dish'
        }).then((result) => {
            if (result.value) {
                this.props.dispatch({
                    type: 'ADD_NEW_DISH',
                    payload: { ...this.state }
                });
                this.setState({
                    ...this.state,
                    dish: '',
                    recipe_url: '',
                    image: '',
                    prep_time: '',
                    servings: 0,
                    difficulty_id: 0,
                    category_id: 0,
                    categories: [],
                    ingredient_id: 0,
                    ingredients: []
                });
            }
        });
    }

    render() {

        const renderSelectedCategories = this.props.categories.map((category) => {
            if (this.state.categories.indexOf(category.id) >= 0) {
                return (<p key={category.id}>{category.category}</p>)
            }
            return null;
        })

        const renderSelectedIngredients = this.props.ingredients.map((ingredient) => {
            if (this.state.ingredients.indexOf(ingredient.id) >= 0) {
                return (<p key={ingredient.id}>{ingredient.ingredient}</p>)
            }
            return null;
        })

        return (
            <form onSubmit={this.submitNewDish}>
                {/* <h2>Add Dish</h2> */}
                <label>Dish Name</label>
                <input required={true} title="Type dish name here (required)" placeholder="*Enter dish name here" type="text" onChange={(event) => { this.handleDishInput(event, 'dish') }} value={this.state.dish} />
                <br />
                <label>Recipe URL</label>
                <input title="Type recipe URL here" placeholder="Enter recipe url here" type="text" onChange={(event) => { this.handleDishInput(event, 'recipe_url') }} value={this.state.recipe_url} />
                <br />
                <label>Image URL</label>
                {/* Future goal: use third-party API to upload photos directly to site */}
                <input title="Type image url here" placeholder="Enter image url here" type="text" onChange={(event) => { this.handleDishInput(event, 'image') }} value={this.state.image} />
                <br />
                <label>Estimated Prep Time</label>
                <input title="Type the estimated prep time here" placeholder="Enter the estimated prep time here" type="text" onChange={(event) => { this.handleDishInput(event, 'prep_time') }} value={this.state.prep_time} />
                <br />
                <label>Servings</label>
                <input title="Type the number of servings here" placeholder="Enter the number of servings here" type="number" onChange={(event) => { this.handleDishInput(event, 'servings') }} value={this.state.servings} />
                <br />
                <label>Difficulty Level</label>
                <DifficultyDropdown handleInput={this.handleDishInput} selectedDifficulty={this.state.difficulty_id} />
                <br />
                <label>Categories</label>
                <CategoryDropdown handleInput={this.handleDishInput} selectedCategory={this.state.category} />
                <button title="Click here to add tag to new dish" onClick={this.storeCategory}>Add Category</button>
                {renderSelectedCategories}
                <br />
                <label>Ingredients</label>
                <IngredientDropdown handleInput={this.handleDishInput} selectedIngredient={this.state.ingredient} />
                <button title="Click here to add ingredient to new dish" onClick={this.storeIngredient}>Add Ingredient</button>
                {renderSelectedIngredients}
                <br />
                <button title="Click here to save this dish" type="submit">Add New Dish</button>
            </form>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        categories: store.categoryReducer,
        ingredients: store.ingredientReducer
    }
}

export default connect(mapStateToProps)(AddDish);