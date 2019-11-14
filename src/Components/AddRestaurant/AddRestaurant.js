import React, { Component } from 'react';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';

import CuisineDropdown from '../CuisineDropdown/CuisineDropdown.js';
import PriceDropdown from '../PriceDropdown/PriceDropdown.js';

class AddRestaurant extends Component {

    state = {
        restaurant: '',
        image: '',
        delivers: false,
        price: 0,
        cuisine: 0
    }

    handleRestaurantInput = (event, property) => {
        this.setState({
            ...this.state,
            [property]: event.target.value
        })
    }

    toggleDelivery = ()=>{
        this.setState({
            ...this.state,
            delivers: !this.state.delivers
        })
    }

    submitNewRestaurant = (event) => {
        event.preventDefault();
        Swal.fire({
            title: 'Please confirm',
            text: 'Are you sure you are ready to add this restaurant?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Add Restaurant'
        }).then((result) => {
            if (result.value) {
                this.props.dispatch({
                    type: 'ADD_NEW_RESTAURANT',
                    payload: { ...this.state }
                })
                this.setState({
                    ...this.state,
                    restaurant: '',
                    image: '',
                    delivers: '',
                    price: 0,
                    cuisine: 0
                })
            }
        })
    }

    render() {
        return (
            <form onSubmit={this.submitNewRestaurant}>
                <h2>Add Restaurant</h2>
                <label>Restaurant Name</label>
                <input required={true} title="Type restaurant name here (required)" placeholder="*Enter restaurant name here" type="text" onChange={(event) => { this.handleRestaurantInput(event, 'restaurant') }} />
                <br />
                <label>Image URL</label>
                {/* Future goal: use third-party API to upload photos directly to site */}
                <input title="Type image url here" placeholder="Enter image url here" type="text" onChange={(event) => { this.handleRestaurantInput(event, 'image') }} />
                <br />
                <label>Cuisine Type</label>
                {/* <select title="Select cuisine type here" onChange={(event) => { this.handleRestaurantInput(event, 'cuisine') }}>
                    <option value={0}>Select a cuisine</option>
                </select> */}
                <CuisineDropdown handleInput={this.handleRestaurantInput}/>
                <br />
                <label>Price Range</label>
                <PriceDropdown handleInput={this.handleRestaurantInput}/>
                <br />
                <label>Delivers?</label>
                <input title="Check if this restaurant delivers" type="checkbox" onChange={this.toggleDelivery} />
                <br />
                <button title="Click here to save this restaurant" type="submit">Add New Restaurant</button>
            </form>
        )
    }
}

export default connect()(AddRestaurant);