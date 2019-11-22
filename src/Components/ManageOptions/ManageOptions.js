import React, { Component } from 'react';
import { connect } from 'react-redux';
import ManageDishes from '../ManageDishes/ManageDishes.js';
import ManageRestaurants from '../ManageRestaurants/ManageRestaurants.js';
import ManageCategories from '../../ManageCategories/ManageCategories.js';

class ManageOptions extends Component {

    state = {
        category: '',
        difficulty: '',
        ingredient: '',
        price: ''
    }

    componentDidMount(){
        this.props.dispatch({
            type: 'FETCH_CATEGORIES'
        });
        this.props.dispatch({
            type: 'FETCH_DIFFICULTY'
        });
        this.props.dispatch({
            type: 'FETCH_INGREDIENTS'
        });
        this.props.dispatch({
            type: 'FETCH_PRICES'
        });
        this.props.dispatch({
            type: 'FETCH_DISHES'
        });
        this.props.dispatch({
            type: 'FETCH_RESTAURANTS'
        });
    }

    handleChange = (event, property)=>{
        this.setState({
            ...this.state,
            [property]: event.target.value
        });
    }

    handleSubmit = (property)=>{
        if(property === 'category'){
            this.props.dispatch({
                type: 'ADD_NEW_CATEGORY',
                payload: { category: this.state.category}
            })
        } else if (property === 'difficulty'){
            this.props.dispatch({
                type: 'ADD_NEW_DIFFICULTY',
                payload: {difficulty: this.state.difficulty}
            })
        } else if (property === 'ingredient') {
            this.props.dispatch({
                type: 'ADD_NEW_INGREDIENT',
                payload: { ingredient: this.state.ingredient }
            })
        } else if (property === 'price'){
            this.props.dispatch({
                type: 'ADD_NEW_PRICE',
                payload: {price: this.state.price}
            })
        }
        this.setState({
            ...this.state,
            [property]: ''
        });
    }

    render() {
        return (
            <>
                <h2>Manage Options</h2>
                <ManageCategories/>
                {/* <h3>Categories</h3>
                <input title="Type new category option here" placeholder="Enter new category label" type="text" onChange={(event) => { this.handleChange(event, 'category') }} value={this.state.category}/>
                <button onClick={() => { this.handleSubmit('category') }}>Add New Category</button>
                {this.props.store.categoryReducer.map((category)=>{
                    return (
                        <p key={category.id}>{category.category}</p>
                        )
                })}
                <hr/> */}
                <h3>Difficulty Levels</h3>
                <input title="Type new difficulty option here" placeholder="Enter new difficulty level" type="text" onChange={(event) => { this.handleChange(event, 'difficulty') }} value={this.state.difficulty} />
                <button onClick={() => { this.handleSubmit('difficulty') }}>Add New Difficulty</button>
                {this.props.store.difficultyReducer.map((level)=>{
                    return (
                        <p key={level.id}>{level.difficulty}</p>
                    )
                })}
                <hr />
                <h3>Ingredients</h3>
                <input title="Type new ingredient option here" placeholder="Enter new ingredient" type="text" onChange={(event) => { this.handleChange(event, 'ingredient') }} value={this.state.ingredient} />
                <button onClick={() => { this.handleSubmit('ingredient') }}>Add New Ingredient</button>
                {this.props.store.ingredientReducer.map((ingredient) => {
                    return (
                        <p key={ingredient.id}>{ingredient.ingredient}</p>
                    )
                })}
                <hr />
                <h3>Price Ranges</h3>
                <input title="Type new price option here" placeholder="Enter new price range" type="text" onChange={(event) => { this.handleChange(event, 'price') }} value={this.state.price} />
                <button onClick={() => { this.handleSubmit('price') }}>Add New Price</button>
                {this.props.store.priceReducer.map((range)=>{
                    return (
                        <p key={range.id}>{range.price}</p>
                    )
                })}
                <hr />
                <ManageDishes/>
                <ManageRestaurants/>
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