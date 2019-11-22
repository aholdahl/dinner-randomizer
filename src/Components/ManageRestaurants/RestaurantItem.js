import React, { Component } from 'react';
import { connect } from 'react-redux';
import PriceDropdown from '../PriceDropdown/PriceDropdown';
import CategoryDropdown from '../CategoryDropdown/CategoryDropdown.js';

class RestaurantItem extends Component {
    state = {
        editMode: false,
        id: 0,
        restaurant: '',
        menu_url: '',
        image: '',
        address: '',
        phone_number: '',
        delivers: false,
        reservation: false,
        price: '',
        price_id: 0,
        category: 0,
        categories: []
    }

    toggleEditMode = () => {
        this.setState({
            ...this.state,
            editMode: !this.state.editMode,
            ...this.props.restaurant
        })
    }

    setChanges = (event, property) => {
        this.setState({
            ...this.state,
            [property]: event.target.value
        })
    }

    updateRestaurant = () => {
        this.props.dispatch({
            type: 'UPDATE_RESTAURANT',
            payload: {
                ...this.state
            }
        })
        this.toggleEditMode();
    }

    deleteRestaurant = () => {
        this.props.dispatch({
            type: 'DELETE_RESTAURANT',
            payload: {
                id: this.props.restaurant.id
            }
        })
    }

    render() {
        return (
            <>
                {this.state.editMode ?
                    <tr key={this.state.id}>
                        <td><input value={this.state.restaurant} onChange={(event) => { this.setChanges(event, 'restaurant') }}/></td>
                        <td><input value={this.state.menu_url} onChange={(event) => { this.setChanges(event, 'menu_url') }}/></td>
                        <td><input value={this.state.image} onChange={(event) => { this.setChanges(event, 'image') }}/></td>
                        <td><input value={this.state.address} onChange={(event) => { this.setChanges(event, 'address') }}/></td>
                        <td><input value={this.state.phone_number} onChange={(event) => { this.setChanges(event, 'phone_number') }}/></td>
                        {/* Need to update specialty fields */}
                        <td><input type="checkbox" checked={this.state.delivers} /></td>
                        <td><input type="checkbox" checked={this.state.reservation} /></td>
                        <td><PriceDropdown selectedPrice={this.state.price_id} handleInput={this.setChanges}/></td>
                        <td>{this.state.categories[0] !== null && this.state.categories.map((category) => {
                            return <p key={category.id}>{category.category}</p>
                        })}</td>
                        <td><button onClick={this.updateRestaurant}>Save</button></td>
                        <td><button onClick={this.deleteRestaurant}>Delete</button></td>
                    </tr >
                    :
                    <tr key={this.props.restaurant.id}>
                        <td>{this.props.restaurant.restaurant}</td>
                        <td>{this.props.restaurant.menu_url}</td>
                        <td><img src={this.props.restaurant.image} alt={this.props.restaurant.restaurant} /></td>
                        <td>{this.props.restaurant.address}</td>
                        <td>{this.props.restaurant.phone_number}</td>
                        <td><input type="checkbox" checked={this.props.restaurant.delivers} disabled={true} /></td>
                        <td><input type="checkbox" checked={this.props.restaurant.reservation} disabled={true} /></td>
                        <td>{this.props.restaurant.price}</td>
                        <td>{this.props.restaurant.categories[0] !== null && this.props.restaurant.categories.map((category) => {
                            return <p key={category.id}>{category.category}</p>
                        })}</td>
                        <td><button onClick={this.toggleEditMode}>Edit</button></td>
                        <td><button onClick={this.deleteRestaurant}>Delete</button></td>
                    </tr>
                }
            </>
        )
    }
}

export default connect()(RestaurantItem);