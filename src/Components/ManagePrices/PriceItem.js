import React, { Component } from 'react';
import { connect } from 'react-redux';

class PriceItem extends Component {
    state = {
        editMode: false,
        price: ''
    }

    toggleEditMode = () => {
        this.setState({
            ...this.state,
            editMode: !this.state.editMode,
            price: this.props.price.price
        })
    }

    setChanges = (event) => {
        this.setState({
            ...this.state,
            price: event.target.value
        })
    }

    updatePrice = () => {
        this.props.dispatch({
            type: 'UPDATE_PRICE',
            payload: {
                price: this.state.price,
                id: this.props.price.id
            }
        })
        this.toggleEditMode();
    }

    deletePrice = () => {
        this.props.dispatch({
            type: 'DELETE_PRICE',
            payload: {
                id: this.props.price.id
            }
        })
    }

    render() {
        return (
            <>
                {this.state.editMode ?
                    <tr key={this.props.price.id} >
                        <td><input value={this.state.price} onChange={this.setChanges} /></td>
                        <td><button onClick={this.updatePrice}>Save</button></td>
                        <td><button onClick={this.deletePrice}>Delete</button></td>
                    </tr >
                    :
                    <tr key={this.props.price.id}>
                        <td>{this.props.price.price}</td>
                        <td><button onClick={this.toggleEditMode}>Edit</button></td>
                        <td><button onClick={this.deletePrice}>Delete</button></td>
                    </tr>
                }
            </>
        )
    }
}

export default connect()(PriceItem);