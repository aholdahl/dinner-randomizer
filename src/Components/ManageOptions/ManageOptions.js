import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddDish from '../AddDish/AddDish.js';
import AddRestaurant from '../AddRestaurant/AddRestaurant.js';

class ManageOptions extends Component {

    state = {
        category: '',
        difficulty: '',
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
                <h3>Categories</h3>
                <input title="Type new category option here" placeholder="Enter new category label" type="text" onChange={(event) => { this.handleChange(event, 'category') }} value={this.state.category}/>
                <button onClick={() => { this.handleSubmit('category') }}>Add New Category</button>
                {this.props.store.categoryReducer.map((category)=>{
                    return (
                        <p key={category.id}>{category.category}</p>
                        )
                })}
                <hr/>
                <h3>Difficulty Levels</h3>
                <input title="Type new difficulty option here" placeholder="Enter new difficulty level" type="text" onChange={(event) => { this.handleChange(event, 'difficulty') }} value={this.state.difficulty} />
                <button onClick={() => { this.handleSubmit('difficulty') }}>Add New Difficulty</button>
                {this.props.store.difficultyReducer.map((level)=>{
                    return (
                        <p key={level.id}>{level.difficulty}</p>
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
                <h3>Dishes</h3>
                <AddDish/>
                <table>
                    <thead>
                        <tr>
                            <th>Dish</th>
                            <th>Recipe URL</th>
                            <th>Image</th>
                            <th>Prep Time</th>
                            <th>Servings</th>
                            <th>Difficulty</th>
                            {/* <th>Category</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.store.dishReducer.map((dish)=>{
                            return (
                                <tr key={dish.id}>
                                    <td>{dish.dish}</td>
                                    <td>{dish.recipe_url}</td>
                                    <td>{dish.image}</td>
                                    <td>{dish.prep_time}</td>
                                    <td>{dish.servings}</td>
                                    <td>{dish.difficulty}</td>
                                    {/* <td>{dish.category}</td> */}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <hr />
                <h3>Restaurants</h3>
                <AddRestaurant/>
                <table>
                    <thead>
                        <tr>
                            <th>Restaurant</th>
                            <th>Menu URL</th>
                            <th>Image</th>
                            <th>Address</th>
                            <th>Phone Number</th>
                            <th>Delivers?</th>
                            <th>Reservation?</th>
                            <th>Price Range</th>
                            {/* <th>Category</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.store.restaurantReducer.map((restaurant)=>{
                            return (
                                <tr key={restaurant.id}>
                                    <td>{restaurant.restaurant}</td>
                                    <td>{restaurant.menu_url}</td>
                                    <td><img src={restaurant.image} alt={restaurant.restaurant}/></td>
                                    <td>{restaurant.address}</td>
                                    <td>{restaurant.phone_number}</td>
                                    <td><input type="checkbox" checked={restaurant.delivers} disabled={true}/></td>
                                    <td><input type="checkbox" checked={restaurant.reservation} disabled={true} /></td>
                                    <td>{restaurant.price}</td>
                                    {/* <td>{restaurant.category}</td> */}
                                </tr>
                            )
                        })}
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