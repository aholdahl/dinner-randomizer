import React, { Component } from 'react';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';

import CategoryDropdown from '../CategoryDropdown/CategoryDropdown.js';
import PriceDropdown from '../PriceDropdown/PriceDropdown.js';

class AddRestaurant extends Component {

    state = {
        restaurant: '',
        menu_url: '',
        image: '',
        address: '',
        phone_number: '',
        delivers: false,
        reservation: false,
        price_id: 0,
        category_id: 0,
        categories: []
    }

    componentDidMount() {
        this.props.dispatch({
            type: 'FETCH_CATEGORIES'
        })
    }

    handleRestaurantInput = (event, property) => {
        this.setState({
            ...this.state,
            [property]: event.target.value
        });
    }

    storeCategory = () => {
        this.setState({
            ...this.state,
            categories: [...this.state.categories, Number(this.state.category_id)],
        });
    }

    toggleDelivery = () => {
        this.setState({
            ...this.state,
            delivers: !this.state.delivers
        });
    }

    toggleReservation = () => {
        this.setState({
            ...this.state,
            reservation: !this.state.reservation
        });
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
                });
                this.setState({
                    ...this.state,
                    restaurant: '',
                    menu_url: '',
                    image: '',
                    address: '',
                    phone_number: '',
                    delivers: false,
                    reservation: false,
                    price_id: 0,
                    category_id: 0,
                    categories: []
                });
            }
        });
    }

    render() {

        const renderSelectedCategories = this.props.categories.map((category)=>{
            if(this.state.categories.indexOf(category.id) >= 0){
                return (<p key={category.id}>{category.category}</p>)
            }
            return null;
        })

        return (
            <form onSubmit={this.submitNewRestaurant}>
                {/* <h2>Add Restaurant</h2> */}
                <label>Restaurant Name</label>
                <input required={true} title="Type restaurant name here (required)" placeholder="*Enter restaurant name here" type="text" onChange={(event) => { this.handleRestaurantInput(event, 'restaurant') }} value={this.state.restaurant}/>
                <br />
                <label>Menu URL</label>
                <input title="Type menu url here" placeholder="Enter menu url here" type="text" onChange={(event) => { this.handleRestaurantInput(event, 'menu_url') }} value={this.state.menu_url} />
                <br />
                <label>Image URL</label>
                {/* Future goal: use third-party API to upload photos directly to site */}
                <input title="Type image url here" placeholder="Enter image url here" type="text" onChange={(event) => { this.handleRestaurantInput(event, 'image') }} value={this.state.image}/>
                <br />
                <label>Address</label>
                <input title="Type restaurant address here" placeholder="*Enter restaurant address here" type="text" onChange={(event) => { this.handleRestaurantInput(event, 'address') }} value={this.state.address} />
                <br />
                <label>Phone Number</label>
                <input title="Type restaurant phone number here" placeholder="*Enter restaurant phone number here" type="text" onChange={(event) => { this.handleRestaurantInput(event, 'phone_number') }} value={this.state.phone_number} />
                <br />
                <label>Delivers?</label>
                <input title="Check if this restaurant delivers" type="checkbox" onChange={this.toggleDelivery} checked={this.state.delivers}/>
                <br />
                <label>Reservation?</label>
                <input title="Check if this restaurant takes reservations" type="checkbox" onChange={this.toggleReservation} checked={this.state.reservation} />
                <br />
                <label>Price Range</label>
                <PriceDropdown handleInput={this.handleRestaurantInput} selectedPrice={this.state.price_id} />
                <br />
                <label>Category</label>
                <CategoryDropdown handleInput={this.handleRestaurantInput} selectedCategory={this.state.category} />
                <button title="Click here to add tag to new restaurant" onClick={this.storeCategory}>Add Tag</button>
                {renderSelectedCategories}
                <br />
                <button title="Click here to save this restaurant" type="submit">Add New Restaurant</button>
            </form>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        categories: store.categoryReducer
    }
}

export default connect(mapStateToProps)(AddRestaurant);