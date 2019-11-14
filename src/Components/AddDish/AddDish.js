import React, { Component } from 'react';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';

import CuisineDropdown from '../CuisineDropdown/CuisineDropdown.js';
import DifficultyDropdown from '../DifficultyDropdown/DifficultyDropdown.js';

class AddDish extends Component {

    state = {
        dish: '',
        image: '',
        prep_time: '',
        difficulty: 0,
        cuisine: 0
    }

    handleDishInput = (event, property) => {
        this.setState({
            ...this.state,
            [property]: event.target.value
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
                    image: '',
                    prep_time: '',
                    difficulty: 0,
                    cuisine: 0
                });
            }
        });
    }

    render() {
        return (
            <form onSubmit={this.submitNewDish}>
                <h2>Add Dish</h2>
                <label>Dish Name</label>
                <input required={true} title="Type dish name here (required)" placeholder="*Enter dish name here" type="text" onChange={(event) => { this.handleDishInput(event, 'dish') }} />
                <br />
                <label>Image URL</label>
                {/* Future goal: use third-party API to upload photos directly to site */}
                <input title="Type image url here" placeholder="Enter image url here" type="text" onChange={(event) => { this.handleDishInput(event, 'image') }} />
                <br />
                <label>Cuisine Type</label>
                <CuisineDropdown handleInput={this.handleDishInput} />
                <br />
                <label>Difficulty Level</label>
                <DifficultyDropdown handleInput={this.handleDishInput} />
                <br />
                <label>Estimated Prep Time</label>
                <input title="Type the estimated prep time here" placeholder="Enter the estimated prep time here" type="text" onChange={(event) => { this.handleDishInput(event, 'prep_time') }} />
                <br />
                <button title="Click here to save this dish" type="submit">Add New Dish</button>
            </form>
        );
    }
}

export default connect()(AddDish);